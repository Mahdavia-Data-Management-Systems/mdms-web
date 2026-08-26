data "tfe_outputs" "core" {
  organization = "MDMS"
  workspace    = "core-prod"
}

data "azurerm_resource_group" "main" {
  name = "rg-mdms-prod-si-01"
}
