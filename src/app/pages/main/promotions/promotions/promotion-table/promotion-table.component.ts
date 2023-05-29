import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promotion-table',
  templateUrl: './promotion-table.component.html',
  styleUrls: ['./promotion-table.component.scss'],
})
export class PromotionTableComponent implements OnInit {
  @Input() total: number = 1;
  @Input() pageSize: number = 50;
  @Input() pageIndex: number = 1;
  @Input() isLoading: boolean = false;
  @Input() listOfData: any[] = [];
  @Input() tabName: string = '';

  @Output() action = new EventEmitter();

  pageSizeOptions = [50, 100, 250, 500];

  constructor() {}
  ngOnInit(): void {}

  selectAction() {
    this.action.emit();
  }
}
