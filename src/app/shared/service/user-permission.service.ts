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
    let params = new HttpParams();
    if (type === 'NPS') {
      params.append('partner_id', '03b0b0e6-2118-42fc-8495-a091365bee1d');
      params.append('user_id', 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036');
    } else {
      params.append('partner_id', '72724b04-da0f-474a-8eee-7d85e9b235b8');
      params.append('user_id', '0fe335cf-202d-4c65-8ba2-25a6dd1236ac');
    }
    // .set('pc', type);
    return this.httpClient.get(this.url + '/partner-details', {
      params: params,
    });
  }
}
