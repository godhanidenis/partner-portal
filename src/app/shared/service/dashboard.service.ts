import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { BehaviorSubject, timeout } from 'rxjs';
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
  routeConfigMap: BehaviorSubject<Map<string, any>> = new BehaviorSubject(
    new Map<string, any>()
  );
  agendasList: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private http: HttpClient, private router: Router) {}

  dashboardSales() {
    let params = new HttpParams()
      .set('partner_id', this.payload.partner_id)
      .set('user_id', this.payload.user_id);

    return this.http.get(this.url + '/dashboard-overview', {
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

  getAgendasDataByCode(action: any) {
    let params = new HttpParams()
      .set('partner_id', this.payload.partner_id)
      .set('user_id', this.payload.user_id)
      .set('code', action.code);
    if (action.product_search) {
      params = params.append('search_term', action.product_search);
    }

    return this.http.get(this.url + '/agendas-data', {
      params: params,
    });
  }

  // handlingTimeConflict() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/handling-time-conflict', {
  //     params: params,
  //   });
  // }

  // unitPriceConflict() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/unit-price-conflict', {
  //     params: params,
  //   });
  // }

  // mapConflict() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/map-conflict', {
  //     params: params,
  //   });
  // }

  // restrictedViaOrderCancellation() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/restricted_via_order_cancellation', {
  //     params: params,
  //   });
  // }

  // discontinuedViaOrderCancellation() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/discontinued_via_order_cancellation', {
  //     params: params,
  //   });
  // }

  // productPriceErrorViaOrderCancellation() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(
  //     this.url + '/product_price_error_via_order_cancellation',
  //     {
  //       params: params,
  //     }
  //   );
  // }

  // cannotShipGroundViaOrderCancellation() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(
  //     this.url + '/cannot_ship_ground_via_order_cancellation',
  //     {
  //       params: params,
  //     }
  //   );
  // }

  // restrictedViaReturns() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/restricted_via_returns', {
  //     params: params,
  //   });
  // }

  // offerIncomplete() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/offer_incomplete', {
  //     params: params,
  //   });
  // }

  // strandedInFeed() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/stranded_in_feed', {
  //     params: params,
  //   });
  // }

  // strandedInCatalog() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/stranded_in_catalog', {
  //     params: params,
  //   });
  // }

  // discontinuedUpdate() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/discontinued_update', {
  //     params: params,
  //   });
  // }

  // End Performance Issues APIs

  // Start Recommendation Issues APIs

  // priceCorrection() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/price_correction', {
  //     params: params,
  //   });
  // }

  // lackOfSalesDemand() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/lack_of_sales_demand', {
  //     params: params,
  //   });
  // }

  // productsLosingImportance() {
  //   let params = new HttpParams()
  //     .set('partner_id', this.payload.partner_id)
  //     .set('user_id', this.payload.user_id);

  //   return this.http.get(this.url + '/products_losing_importance', {
  //     params: params,
  //   });
  // }

  usingThe123storesShippingLabel() {
    let params = new HttpParams()
      .set('partner_id', this.payload.partner_id)
      .set('user_id', this.payload.user_id);

    return this.http.get(this.url + '/using_the_123stores_shipping_label', {
      params: params,
    });
  }

  // End Recommendation Issues APIs

  getAllIssues() {
    const routeMap = new Map<string, string>();
    const promise = new Promise<any>((resolve) => {
      if (!this.routeConfigMap.value.size) {
        const data = {
          partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
          user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
        };
        this.getIssues(data).subscribe((res: any) => {
          res?.performance?.forEach((issue: any) => {
            routeMap.set(issue.code, issue);
          });
          res?.recommendation?.forEach((issue: any) => {
            routeMap.set(issue.code, issue);
          });
          this.agendasList.next(res);
          this.routeConfigMap.next(routeMap);
          resolve(this.routeConfigMap);
        });
      } else {
        resolve(this.routeConfigMap);
      }
    });
    return promise;
  }

  // async isRouteAccessible(url: any) {
  //   const code = this.getLastSectionOfUrl(url);
  //   const routeConfigMap = await this.getAllIssues();

  //   return new Promise<boolean>((resolve) => {
  //     const isAccessible = code
  //       ? routeConfigMap.value.get(code!)
  //         ? true
  //         : false
  //       : false;
  //     if (isAccessible) {
  //       resolve(true);
  //     } else {
  //       this.router.navigate(['/main/dashboard']);
  //     }
  //   });
  // }

  getLastSectionOfUrl(url: string) {
    const sections = url.split('/');
    return sections[sections.length - 1];
  }
}
