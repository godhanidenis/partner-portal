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

export interface EditEndDatePromotions {
  partner_id: string;
  user_id: string;
  promo_code: string;
  start_date?: string | Date;
  end_date?: string | Date;
}
