export interface Promotions {
  page: number;
  open: boolean;
}

export interface Promotion {
  partner_id: string;
  user_id: string;
}

export interface StopPromotions {
  partner_id: string;
  user_id: string;
  promo_code: string;
}

export interface PromoTemplate {
  partner_id: string;
  user_id: string;
  include_data: boolean;
}
export interface ExportPromo {
  partner_id: string;
  user_id: string;
  start_date: string | Date;
  end_date: string | Date;
  promo_status: string;
}

export interface EditEndDatePromotions {
  partner_id: string;
  user_id: string;
  promo_code: string;
  start_date?: string | Date;
  end_date?: string | Date;
}
