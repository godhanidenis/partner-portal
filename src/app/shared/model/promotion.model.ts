export interface Promotions {
  page: number;
  filter_start_date?: string;
  filter_end_date?: string;
  filter_status?: string;
  search_term?: string;
  open: boolean;
}
export interface StopPromotions {
  promo_code: string;
}

export interface PromoTemplate {
  include_data: boolean;
}
export interface ExportPromo {
  start_date: string | Date;
  end_date: string | Date;
  promo_status: string;
}

export interface EditEndDatePromotions {
  promo_code: string;
  start_date?: string | Date;
  end_date?: string | Date;
}
