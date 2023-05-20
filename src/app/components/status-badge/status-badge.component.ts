import { Component, Input } from '@angular/core';

export enum StatusEnum {
  Success,
  Pending,
  Hold,
  Failure
}

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {
  
  @Input() type: StatusEnum = StatusEnum.Pending;
  @Input() text: string | undefined= "";
}
