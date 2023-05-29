import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusEnum } from 'src/app/components/status-badge/status-badge.component';

@Component({
  selector: 'app-return-table',
  templateUrl: './return-table.component.html',
  styleUrls: ['./return-table.component.scss'],
})
export class ReturnTableComponent implements OnInit {
  @Input() total: number = 1;
  @Input() pageSize: number = 50;
  @Input() pageIndex: number = 1;
  @Input() isLoading: boolean = false;
  @Input() listOfData: any[] = [];
  @Input() tabName: string = '';

  @Output() action = new EventEmitter();

  statusEnum: typeof StatusEnum = StatusEnum;

  pageSizeOptions = [50, 100, 250, 500];

  constructor() {}
  ngOnInit(): void {}

  selectAction(data: string) {
    if (data === 'Return Received') {
      this.action.emit(data);
    } else if (data === 'Return Initiated') {
      this.action.emit();
    }
  }
}
