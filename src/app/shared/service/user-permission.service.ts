import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserPermissionService {
  url = environment.baseUrl;
  userPermission = new BehaviorSubject('');
  constructor(private httpClient: HttpClient) {}

  getPartnerPermission(type: string) {
    let params = new HttpParams()
      .set('partner_id', '03b0b0e6-2118-42fc-8495-a091365bee1d')
      .set('user_id', 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036');
    // .set('pc', type);
    return this.httpClient.get(this.url + '/partner-details', {
      params: params,
    });
  }
}
