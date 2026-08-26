data "tfe_outputs" "core" {
  organization = "MDMS"
  workspace    = "core-dev"
}

data "azurerm_resource_group" "main" {
  name = "rg-mdms-dev-si-01"
}
