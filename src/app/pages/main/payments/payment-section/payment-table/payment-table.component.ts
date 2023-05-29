import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StatusEnum } from 'src/app/components/status-badge/status-badge.component';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss'],
})
export class PaymentTableComponent implements OnInit {
  @Input() total: number = 1;
  @Input() pageSize: number = 50;
  @Input() pageIndex: number = 1;
  @Input() isLoading: boolean = false;
  @Input() listOfData: any[] = [];
  @Input() tabName: string = '';

  @Output() changeModel = new EventEmitter();

  statusEnum: typeof StatusEnum = StatusEnum;

  pageSizeOptions = [50, 100, 250, 500];

  constructor() {}
  ngOnInit(): void {}

  selectAction(data: string) {
    this.changeModel.emit(data);
  }
}
