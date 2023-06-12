export class GetAllProducts {
  success?: boolean;
  processed_at?: string;
  requested_partner_id?: string;
  requested_user_id?: string;
  pagination?: {
    total_rows: number;
    current_page: number;
    total_pages: number;
  };
  filtered?: boolean;
  applied_filters?: {
    filter_product_status: string;
    filter_inventory_status: string;
    filter_brand: string;
    filter_collection: string;
    filter_product_category: string;
    filter_sales_tier: string;
  };
  searched?: boolean;
  applied_search_term?: string;
  products?: SingleProduct[];
}

export class SingleProduct {
  sku?: string;
  mpn?: number;
  upc?: number;
  asin?: string;
  name?: string;
  brand?: string;
  unit_price?: string;
  map_price?: string;
  product_status?: string;
  inventory_status?: string;
}
