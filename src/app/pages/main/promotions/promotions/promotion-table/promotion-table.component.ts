import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promotion-table',
  templateUrl: './promotion-table.component.html',
  styleUrls: ['./promotion-table.component.scss'],
})
export class PromotionTableComponent implements OnInit {
  @Input() total: number = 1;
  @Input() pageSize: number = 100;
  @Input() pageIndex: number = 1;
  @Input() isLoading: boolean = false;
  @Input() listOfData: any[] = [];
  @Input() tabName: string = '';

  @Output() action = new EventEmitter();
  @Output() pageChange = new EventEmitter();

  pageSizeOptions = [100];

  constructor() {}
  ngOnInit(): void {}

  pageIndexChange(page: number) {
    this.pageChange.emit(page);
  }

  selectAction() {
    this.action.emit();
  }
}
