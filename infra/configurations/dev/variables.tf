variable "azure_subscription_id" {
  description = "Azure subscription ID"
  type        = string
}

variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "centralindia"
}

variable "swa_location" {
  description = "Azure region for Static Web App"
  type        = string
  default     = "eastasia"
}
