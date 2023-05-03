import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  breadcrumb: any[] = [];
  breadcrumbs = new BehaviorSubject(this.breadcrumb);

  constructor(private httpClient: HttpClient) {}
}
