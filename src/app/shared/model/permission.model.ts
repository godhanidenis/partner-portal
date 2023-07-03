export interface PermissionList {
  brands: string[];
  brands_total: number;
  collections: string[];
  collections_total: number;
  inventory_method_email: true;
  partner_code: string;
  partner_display_name: string;
  partner_map: true;
  partner_sku_level_handling: true;
  processed_at: string | Date;
  product_categories: string[];
  product_category_total: number;
  success: boolean;
}
