import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  getAllProduct(page: number) {
    let params = new HttpParams().set('page', page);
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
