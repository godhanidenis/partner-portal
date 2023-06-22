import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Promotion } from '../model/promotion.model';

export interface ExportDash {
  partner_id: string;
  user_id: string;
  code: string;
}

export interface SalesReport {
  partner_id: string;
  user_id: string;
  type: string;
}
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  url = environment.baseUrl;
  payload: Promotion = {
    partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
    user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
  };
  constructor(private http: HttpClient) {}

  dashboardSales() {
    let params = new HttpParams()
      .set('partner_id', this.payload.partner_id)
      .set('user_id', this.payload.user_id);

    return this.http.get(this.url + '/dashboard-sales', {
      params: params,
    });
  }

  exportData(payload: ExportDash) {
    return this.http.post(this.url + '/agendas-export', payload);
  }

  getIssues(action: Promotion) {
    let params = new HttpParams()
      .set('partner_id', action.partner_id)
      .set('user_id', action.user_id);

    return this.http.get(this.url + '/agendas-list', {
      params: params,
    });
  }

  salesReport(action: SalesReport) {
    let params = new HttpParams()
      .set('partner_id', action.partner_id)
      .set('user_id', action.user_id)
      .set('type', action.type);

    return this.http.get(this.url + '/sales-report', {
      params: params,
    });
  }

  downloadSalesReport(action: SalesReport) {
    let params = new HttpParams()
      .set('partner_id', action.partner_id)
      .set('user_id', action.user_id)
      .set('type', action.type);

    return this.http.get(this.url + '/download-sales-report', {
      params: params,
    });
  }

  // Start Performance Issues APIs

  getAgendasDataByCode(code: any) {
    let params = new HttpParams()
      .set('partner_id', this.payload.partner_id)
      .set('user_id', this.payload.user_id)
      .set('code', code);

    return this.http.get(this.url + '/agendas-data', {
      params: params,
    });
  }

  // End Recommendation Issues APIs
}
