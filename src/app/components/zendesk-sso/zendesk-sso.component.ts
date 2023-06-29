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

  url = "https://flyontechsolutions.zendesk.com/access/jwt?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODgwMzkxOTksImp0aSI6IjliZTAzNWUxLTE2NzItMTFlZS1hOGY4LTMwMjQzMjdiZjU3ZSIsIm5hbWUiOiJEZW5pcyIsImVtYWlsIjoiZGdvZGhhbmkxODAyQGdtYWlsLmNvbSIsImV4cCI6IjI1OTIwMDAifQ.6bbJx6rRbGyRx71p_3gCVLidA9R4ruIB5mjRkMhHXaY"
  constructor(
    private httpClient: HttpClient,
    private message: NzMessageService,
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    window.location.href = this.url;
  }
}
