import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  EditEndDatePromotions,
  Promotion,
  Promotions,
  StopPromotions,
} from '../model/promotion.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getIssues(action: Promotion) {
    let params = new HttpParams()
      .set('partner_id', action.partner_id)
      .set('user_id', action.user_id);

    return this.http.get(this.url + '/dashboard', {
      params: params,
    });
  }
}
