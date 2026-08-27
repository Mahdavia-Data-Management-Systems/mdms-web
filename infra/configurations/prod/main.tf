module "keyvault" {
  source              = "../../modules/azure/keyvault"
  name                = "kv-mahdaviadms-prod"
  resource_group_name = data.azurerm_resource_group.main.name
  location            = data.azurerm_resource_group.main.location
}

module "swa" {
  source              = "../../modules/azure/swa"
  name                = "swa-mdms-prod"
  resource_group_name = data.azurerm_resource_group.main.name
  location            = var.swa_location

  app_settings = {
    "NEXT_PUBLIC_ENTRA_CLIENT_ID"    = "42b3e442-6a5f-4a2b-bacd-99bc68fe4f68"
    "NEXT_PUBLIC_ENTRA_AUTHORITY"     = "https://${split(".", data.tfe_outputs.core.values.tenant_domain)[0]}.ciamlogin.com/${data.tfe_outputs.core.values.tenant_id}"
    "NEXT_PUBLIC_ENTRA_REDIRECT_URI" = "https://mahdavisonline.com"
  }
}

resource "azurerm_key_vault_secret" "swa_deployment_token" {
  name         = "swa-deployment-token"
  value        = module.swa.api_key
  key_vault_id = module.keyvault.id
}
