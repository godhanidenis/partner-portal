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

  url = "https://flyontechsolutions.zendesk.com/access/jwt?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODgwMzc0NzgsImp0aSI6IjlhNTVhNDY0LTE2NmUtMTFlZS04YjUyLTMwMjQzMjdiZjU3ZSIsIm5hbWUiOiJEZW5pcyIsImVtYWlsIjoiZGdvZGhhbmkxODAyQGdtYWlsLmNvbSJ9.3fzeTeNkKOlUmRIKoYprVxAIR9QHrysmcPLI36dsFYc"
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
