terraform {
  cloud {
    organization = "MDMS"
    workspaces {
      name = "mdms-web-dev"
    }
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
    tfe = {
      source  = "hashicorp/tfe"
      version = "~> 0.62"
    }
  }
}

provider "azurerm" {
  subscription_id = var.azure_subscription_id
  features {}
}
