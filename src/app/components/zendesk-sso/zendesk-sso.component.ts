import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-zendesk-sso',
  templateUrl: './zendesk-sso.component.html',
  styleUrls: ['./zendesk-sso.component.scss'],
})
export class ZendeskSSOComponent {

  url = "https://flyontechsolutions.zendesk.com/access/jwt?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODgwMzY4NDAsImp0aSI6IjFkYzBjZjY4LTE2NmQtMTFlZS1hOTljLTMwMjQzMjdiZjU3ZSIsIm5hbWUiOiJEZW5pcyIsImVtYWlsIjoiZGdvZGhhbmkxODAyQGdtYWlsLmNvbSJ9.thJe4kEyKZDyd4Ywh_qrSIgCDzaesojgEnB8OZaHxfQ"
  constructor(
    private httpClient: HttpClient,
    private message: NzMessageService,
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    alert('Okay I am processding for auth');
    window.location.href = this.url;
  }
}
