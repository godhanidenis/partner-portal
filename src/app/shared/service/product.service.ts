import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Action {
  page: number;
  filter_product_status?: string;
  filter_inventory_status?: string;
  filter_brand?: string;
  filter_collection?: string;
  filter_product_category?: string;
  filter_sales_tier?: string;
  product_search: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  getAllProduct(action: Action) {
    let params = new HttpParams().set('page', action.page);
    if (action.filter_product_status) {
      params = params.append(
        'filter_product_status',
        action.filter_product_status
      );
    }
    if (action.filter_inventory_status) {
      params = params.append(
        'filter_inventory_status',
        action.filter_inventory_status
      );
    }
    if (action.filter_brand) {
      params = params.append('filter_brand', action.filter_brand);
    }
    if (action.filter_collection) {
      params = params.append('filter_collection', action.filter_collection);
    }
    if (action.filter_product_category) {
      params = params.append(
        'filter_product_category',
        action.filter_product_category
      );
    }
    if (action.filter_sales_tier) {
      params = params.append('filter_sales_tier', action.filter_sales_tier);
    }
    if (action.product_search) {
      params = params.append('product_search', action.product_search);
    }

    return this.httpClient.get(this.url + '/products/products', {
      params: params,
    });
  }

  getProduct(sku: string) {
    let params = new HttpParams().set('sku', sku);
    return this.httpClient.get(this.url + '/products/single-product', {
      params: params,
    });
  }

  getBrand() {
    let params = new HttpParams().set('pc', 'NPS');
    return this.httpClient.get(this.url + '/products/brands', {
      params: params,
    });
  }

  getCategories() {
    let params = new HttpParams().set('pc', 'AAA');
    return this.httpClient.get(this.url + '/products/categories', {
      params: params,
    });
  }

  getCollections() {
    let params = new HttpParams().set('pc', 'AAA');
    return this.httpClient.get(this.url + '/products/collections', {
      params: params,
    });
  }

  createProduct(data: any) {
    return this.httpClient.post(this.url + '/product', data);
  }

  editProduct(data: any, id: number) {
    return this.httpClient.put(this.url + '/product/' + id, data);
  }
}
