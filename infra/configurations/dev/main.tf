module "keyvault" {
  source              = "../../modules/azure/keyvault"
  name                = "kv-mahdaviadms-dev"
  resource_group_name = data.azurerm_resource_group.main.name
  location            = data.azurerm_resource_group.main.location
}

module "swa" {
  source              = "../../modules/azure/swa"
  name                = "swa-mdms-dev"
  resource_group_name = data.azurerm_resource_group.main.name
  location            = var.swa_location

  app_settings = {
    "NEXT_PUBLIC_ENTRA_CLIENT_ID" = "1021d885-0174-4138-a53b-bb6502f7840f"
    "NEXT_PUBLIC_ENTRA_AUTHORITY" = "https://${nonsensitive(data.tfe_outputs.core.values.tenant_domain)}.ciamlogin.com/${nonsensitive(data.tfe_outputs.core.values.tenant_id)}"
  }
}

resource "azurerm_key_vault_secret" "swa_deployment_token" {
  name         = "swa-deployment-token"
  value        = module.swa.api_key
  key_vault_id = module.keyvault.id
}
