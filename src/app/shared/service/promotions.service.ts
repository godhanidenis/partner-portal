import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Promotions {
  page: number;
  open: boolean;
}

export interface Promotion {
  partner_id: string;
  user_id: string;
  promo_code: string;
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
  end_date: string | Date;
}

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllPromotions(action: Promotions) {
    let params = new HttpParams()
      .set('partner_id', '03b0b0e6-2118-42fc-8495-a091365bee1d')
      .set('user_id', 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036')
      .set('page', action.page)
      .set('open', action.open);

    return this.http.get(this.url + '/promos', {
      params: params,
    });
  }

  stopPromotions(payload: StopPromotions) {
    return this.http.post(this.url + '/stop-promo', payload);
  }

  cancelPromotions(payload: StopPromotions) {
    return this.http.post(this.url + '/cancel-promo', payload);
  }

  editEndDatePromo(payload: EditEndDatePromotions) {
    return this.http.post(this.url + '/edit-end-date-promo', payload);
  }

  getPromotion(action: Promotion) {
    let params = new HttpParams()
      .set('partner_id', action.partner_id)
      .set('user_id', action.user_id)
      .set('promo_code', action.promo_code);

    return this.http.get(this.url + '/promo', {
      params: params,
    });
  }
}
