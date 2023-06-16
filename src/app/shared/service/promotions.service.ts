import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  EditEndDatePromotions,
  ExportPromo,
  PromoTemplate,
  Promotions,
  StopPromotions,
} from '../model/promotion.model';

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
    return this.http.post(this.url + '/edit-promo', payload);
  }

  getPromotion(action: StopPromotions) {
    let params = new HttpParams()
      .set('partner_id', action.partner_id)
      .set('user_id', action.user_id)
      .set('promo_code', action.promo_code);

    return this.http.get(this.url + '/promo', {
      params: params,
    });
  }

  createPromotion(payload: any) {
    return this.http.post(this.url + '/add-promo', payload);
  }

  downloadPromotionDetails(action: StopPromotions) {
    let params = new HttpParams()
      .set('partner_id', action.partner_id)
      .set('user_id', action.user_id)
      .set('promo_code', action.promo_code);

    return this.http.get(this.url + '/download-promotion-details', {
      params: params,
    });
  }

  promoTemplate(action: PromoTemplate) {
    let params = new HttpParams()
      .set('partner_id', action.partner_id)
      .set('user_id', action.user_id)
      .set('include_data', action.include_data);

    return this.http.get(this.url + '/promo-template', {
      params: params,
    });
  }

  exportPromo(payload: ExportPromo) {
    return this.http.post(this.url + '/export-promo', payload);
  }
}
