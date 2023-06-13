import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface InventoryFeed {
  partner_id: string;
  user_id: string;
  feed_code?: string;
  feed_result?: string;
}

export interface GetAllAction {
  page: number;
  filter_start_date?: string;
  filter_end_date?: string;
  filter_inventory_method?: string;
  filter_feed_result?: string;
  filter_feed_status?: string;
  search_term?: string;
}
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllInventory(action: GetAllAction) {
    let params = new HttpParams()
      .set('partner_id', '03b0b0e6-2118-42fc-8495-a091365bee1d')
      .set('user_id', 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036')
      .set('page', action.page);
    if (action.filter_start_date) {
      params = params.append('filter_start_date', action.filter_start_date);
    }
    if (action.filter_end_date) {
      params = params.append('filter_end_date', action.filter_end_date);
    }
    if (action.filter_inventory_method) {
      params = params.append(
        'filter_inventory_method',
        action.filter_inventory_method
      );
    }
    if (action.filter_feed_result) {
      params = params.append('filter_feed_result', action.filter_feed_result);
    }
    if (action.filter_feed_status) {
      params = params.append('filter_feed_status', action.filter_feed_status);
    }
    if (action.search_term) {
      params = params.append('search_term', action.search_term);
    }

    return this.http.get(this.url + '/inventory-feeds', {
      params: params,
    });
  }

  inventoryFeed(payload: InventoryFeed) {
    let params = new HttpParams()
      .set('partner_id', payload.partner_id)
      .set('user_id', payload.user_id);
    if (payload.feed_code) {
      params = params.append('feed_code', payload.feed_code);
    }
    return this.http.get(this.url + '/inventory-feed-processed', {
      params: params,
    });
  }

  inventoryFeedReject(payload: InventoryFeed) {
    let params = new HttpParams()
      .set('partner_id', payload.partner_id)
      .set('user_id', payload.user_id);
    if (payload.feed_code) {
      params = params.append('feed_code', payload.feed_code);
    }
    return this.http.get(this.url + '/inventory-feed-rejected', {
      params: params,
    });
  }

  inventoryFeedUpload(payload: any) {
    return this.http.post(this.url + '/inventory-feed-upload', payload);
  }

  inventoryFeedHistory(payload: any) {
    return this.http.post(this.url + '/export-inventory-feed', payload);
  }
}
