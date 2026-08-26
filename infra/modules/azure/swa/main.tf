resource "azurerm_static_web_app" "this" {
  name                = var.name
  resource_group_name = var.resource_group_name
  location            = var.location
  sku_tier            = var.sku_tier
  sku_size            = var.sku_tier

  app_settings = var.app_settings
  tags         = var.tags
}

resource "azurerm_static_web_app_custom_domain" "this" {
  count             = var.custom_domain != null ? 1 : 0
  static_web_app_id = azurerm_static_web_app.this.id
  domain_name       = var.custom_domain
  validation_type   = length(split(".", var.custom_domain)) > 2 ? "cname-delegation" : "dns-txt-token"
}
