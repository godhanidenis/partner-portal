import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllInventory(action: any) {
    let params = new HttpParams().set('page', action.page).set('pc', 'NPS');
    if (action.filter_status) {
      params = params.append('filter_status', action.filter_status);
    }
    if (action.inventory_search) {
      params = params.append('inventory_search', action.inventory_search);
    }

    return this.http.get(this.url + '/inventory/inventory-feeds', {
      params: params,
    });
  }
}
