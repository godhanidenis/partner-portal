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

  constructor(
    private httpClient: HttpClient,
    private message: NzMessageService,
    private router: Router,
  ) {
    this.httpClient.get('https://ticket-resolver-test-api.flyontech.com/auth/generate_zendesk_token').subscribe((res:any)=>{
      window.location.href = res;
    });
  }
  ngOnInit(): void {
  }
}
