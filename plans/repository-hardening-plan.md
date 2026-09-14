# Repository Hardening Plan — mdms-web

This repository is public and every deploy job runs `terraform apply -auto-approve`. Nothing
currently stands between a push and an Azure deployment. This plan brings the repository up to the
baseline already applied to `ishqnama-web` (recorded in that repository's `infra/README.md` under
**Repository protection**).

`$R` below is `Mahdavia-Data-Management-Systems/mdms-web`. None of these settings live in
Terraform; they are GitHub settings, recorded here so they can be recreated.

## Current state

| Control | ishqnama-web | mdms-web |
| --- | --- | --- |
| Deployment branch policy (environment restricted to `main`) | yes | **none — any branch** |
| Required reviewer on `prod` | yes | **none** |
| Ruleset on `main` (PR + approval, no force-push or deletion) | yes | **none** |
| `.github/CODEOWNERS` | yes | **none** |
| Actions allowlist | selected | **all actions allowed** |
| Fork PR approval policy | `all_external_contributors` | `first_time_contributors` |
| PR validation workflow | yes | **none** |
| Dependabot | yes | **none** |
| Default `GITHUB_TOKEN` permissions | read | read (already correct) |
| Every apply runs inside an environment | yes | yes (already correct) |

## Why this matters for the Azure bill

The Terraform in this repository is cheap today — Static Web App on the Free SKU, a standard Key
Vault, and a free Cloudflare zone. The exposure is not the current resource set. It is that a job
in this repository can mint an Azure OIDC token for the subscription, and anything holding that
token can create any resource in it. The controls that matter are therefore the ones on the token
path, which is what items 1 to 4 below address.

## Findings, in order of blast radius

### 1. Every push to `main` deploys to production, ungated

`ci.yml` chains `infra-dev` to `deploy-frontend-dev` to `infra-prod` to `deploy-frontend-prod`, all
automatic and all `-auto-approve`. The `prod` environment has no protection rules at all, so
nothing pauses the run. By contrast `mdms-core-infra` at least holds `prod` behind a required
reviewer. One incorrect merge reaches production Azure with no human in the loop.

### 2. No deployment branch policies, so any ref can obtain Azure credentials

Neither `dev` nor `prod` has a deployment branch policy, so both accept deployments from any
branch. Because the federated credential subject is `...:environment:<env>`, an environment with
no branch policy means any branch can mint an Azure token. `ci.yml` also exposes
`workflow_dispatch`, and a dispatch can be run from any branch. The practical consequence: push a
branch whose workflow runs whatever you like, dispatch it, and it authenticates to Azure without a
pull request or a review.

### 3. `main` is unprotected

There is no ruleset and no branch protection. Direct pushes, force-pushes and branch deletion are
all permitted, and there are no required status checks or reviews. Combined with items 1 and 2, a
single push is a production deployment.

### 4. All actions are allowed

`allowed_actions` is `all`, so any third-party action can run inside a job that holds the Azure
OIDC token, the Terraform Cloud token, and the Static Web App deployment token that
`deploy-frontend.yml` reads out of Key Vault.

### 5. No pull request validation

There is no `pull_request` workflow, so there is nothing to require as a status check once rulesets
are enabled.

### 6. Org-level secrets are readable by any job

This repository has no environment secrets or variables, yet the workflows reference
`secrets.TF_API_TOKEN` and `vars.AZURE_*`. Those must therefore be organisation-level, which means
any job in any repository in the organisation can read them regardless of which environment it
declares. Confirming this needs `admin:org` rights.

Secret *placement* within this repository is already correct, which is worth recording because
`mdms-core-infra` gets it wrong. In both `deploy-infra.yml` and `destroy-infra.yml`,
`TF_TOKEN_app_terraform_io` is set in the job-level `env:` of a job that declares
`environment: ${{ inputs.environment }}`, so no ungated job ever sees the Terraform Cloud token.
`ci.yml` passes `secrets: inherit` to the called workflows, but every job in those workflows
declares an environment, so nothing leaks. No change needed here.

## Planned changes

### Step 1 (DONE) — Restrict both environments to `main`

This is the single highest-value change. Apply before anything else.

```bash
R=Mahdavia-Data-Management-Systems/mdms-web
for e in dev prod; do
  gh api -X PUT "repos/$R/environments/$e" --input - <<'JSON'
{"deployment_branch_policy":{"protected_branches":false,"custom_branch_policies":true}}
JSON
  gh api -X POST "repos/$R/environments/$e/deployment-branch-policies" -f name=main -f type=branch
done
```

A `PUT` on an environment replaces its protection rules, so once step 2 adds a reviewer to `prod`,
any later `PUT` must re-send `"reviewers"` in the same call or the reviewer is silently wiped.

### Step 2 (DONE) — Require a reviewer on `prod`

Matches `mdms-core-infra`, and makes the prod half of `ci.yml` park on "Review pending" instead of
applying. `prevent_self_review` stays `false`: the sole maintainer is also the only reviewer.

```bash
gh api -X PUT "repos/$R/environments/prod" --input - <<'JSON'
{"reviewers":[{"type":"User","id":<noormahdi-user-id>}],
 "prevent_self_review":false,
 "deployment_branch_policy":{"protected_branches":false,"custom_branch_policies":true}}
JSON
```

Resolve the id with `gh api users/noormahdi --jq .id`.

### Step 3 — Add a ruleset on `main`

Require a pull request with one approval, require the PR validation checks from step 5, and block
deletion and force-push. The sole maintainer needs to be a bypass actor, because GitHub will not
accept a pull request author's own approval; the deployment branch policies from step 1 still
apply to whatever is merged.

### Step 4 — Restrict the actions allowlist

The actions actually used are `actions/checkout`, `actions/setup-node`, `azure/login`,
`Azure/static-web-apps-deploy` and `hashicorp/setup-terraform`.

```bash
gh api -X PUT "repos/$R/actions/permissions" -F enabled=true -f allowed_actions=selected
gh api -X PUT "repos/$R/actions/permissions/selected-actions" --input - <<'JSON'
{"github_owned_allowed":true,"verified_allowed":false,
 "patterns_allowed":["Azure/*","azure/*","hashicorp/setup-terraform@*"]}
JSON
```

### Step 5 — Add `pr-validation.yml`

Modelled on the `ishqnama-web` file: triggered by `pull_request` into `main`, never
`pull_request_target`; `contents: read`; no environment and no secrets, so a fork pull request
cannot deploy. It should run the frontend build and `terraform fmt -check -recursive`. Its job
names then become the required status checks in step 3.

`terraform validate` is deliberately excluded: it needs `terraform init`, and the `cloud {}` block
requires the Terraform Cloud token, which must not be exposed to a fork.

### Step 6 — Tighten fork pull request approval

```bash
gh api -X PUT "repos/$R/actions/permissions/fork-pr-contributor-approval" \
  -f approval_policy=all_external_contributors
```

### Step 7 — Add `.github/CODEOWNERS`

```
# Everything that can deploy or cost money needs the owner's review.
/.github/  @noormahdi
/infra/    @noormahdi
```

Then enable "require code owner review" on the ruleset from step 3.

### Step 8 — Add `.github/dependabot.yml`

Cover `github-actions`, `npm` for `frontend/`, and `terraform`. Grouping the GitHub Actions updates
into a single weekly pull request avoids the five-separate-PR situation that occurred in
`ishqnama-web`.

### Step 9 — Consider splitting the production deployment out of `ci.yml`

Even with a required reviewer, every push to `main` opens a pending production deployment. The
`ishqnama-web` shape is cleaner: `ci.yml` deploys dev only, and a separate manually triggered
`prod-release.yml` promotes to production under a `concurrency` group. Worth doing, but it is a
workflow redesign rather than a protection setting, so it is listed last.

## Open question

**Confirmed 2026-09-14:** the organisation secrets are `TF_API_TOKEN`, `DOCKERHUB_TOKEN` and
`CLOUDFLARE_API_TOKEN`, and all three are set to `visibility=all`. The organisation variables
`AZURE_CLIENT_ID`, `AZURE_SUBSCRIPTION_ID`, `AZURE_TENANT_ID`, `CLOUDFLARE_ACCOUNT_ID` and
`DOCKERHUB_USERNAME` are likewise `visibility=all`. Every repository in the organisation can
therefore read all of them, including the private `ishqnama-db` and any repository created in
future. This is the widest possible setting, so the concern below is real rather than theoretical.

Whether `TF_API_TOKEN` and the `AZURE_*` variables should be recreated as environment secrets on
`dev` and `prod` instead of organisation-level. That would put them behind the branch policies from
step 1 as well. It needs org-admin rights and affects the other repositories in the organisation,
so it should be decided across all of them at once rather than here.

Note the ordering dependency. Moving the token to environment secrets buys little on its own: any
workflow can simply declare `environment: dev` and receive it again. The gain comes from the fact
that declaring an environment subjects the job to that environment's protection rules, so the
value only materialises once step 1 is in place. Environment secrets are a multiplier on the
branch policies, not a substitute for them.
