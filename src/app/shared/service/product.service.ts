import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  getAllProduct() {
    return this.httpClient.get(this.url + '/products');
  }

  getProduct(sku: number) {
    let params = new HttpParams().set('sku', sku);
    return this.httpClient.get(this.url + 'products/single-product/', {
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
