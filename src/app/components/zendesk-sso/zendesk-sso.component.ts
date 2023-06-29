import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-zendesk-sso',
  templateUrl: './zendesk-sso.component.html',
  styleUrls: ['./zendesk-sso.component.scss'],
})
export class ZendeskSSOComponent {
  constructor(
    private httpClient: HttpClient,
    private message: NzMessageService
  ) {}
  ngOnInit(): void {}
}
