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

  dashboardCatalog() {
    let params = new HttpParams()
      .set('partner_id', this.payload.partner_id)
      .set('user_id', this.payload.user_id);

    return this.http.get(this.url + '/dashboard-catalog', {
      params: params,
    });
  }

  dashboardDropshipBB() {
    let params = new HttpParams()
      .set('partner_id', this.payload.partner_id)
      .set('user_id', this.payload.user_id);

    return this.http.get(this.url + '/dashboard-dropship-bb', {
      params: params,
    });
  }

  getIssues(action: Promotion) {
    let params = new HttpParams()
      .set('partner_id', action.partner_id)
      .set('user_id', action.user_id);

    return this.http.get(this.url + '/agendas-list', {
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
}
