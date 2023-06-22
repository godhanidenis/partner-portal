import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recommendation-issue-table',
  templateUrl: './recommendation-issue-table.component.html',
  styleUrls: ['./recommendation-issue-table.component.scss'],
})
export class RecommendationIssueTableComponent implements OnInit {
  @Input() total: number = 1;
  @Input() pageSize: number = 100;
  @Input() pageIndex: number = 1;
  @Input() isLoading: boolean = false;
  @Input() listOfData: any[] = [];
  @Input() tabName: string = '';

  @Output() changeModel = new EventEmitter();

  pageSizeOptions = [100];
  editData: { mpn: string; current: number } = {
    mpn: 'string',
    current: 0,
  };
  editLabel: string[] = [];
  isVisible: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  navigateAsin(asin: string) {
    window.open(`https://www.amazon.com/dp/${asin}`);
  }

  matchValue(mpn: string, unit_price: number) {
    if (this.tabName !== 'Shipping Label') {
      this.editData = {
        mpn: mpn,
        current: unit_price,
      };
      this.editLabel = ['MPN', 'Current Unit Price', 'New Unit Price'];
      this.isVisible = true;
    }
  }

  selectAction(data: string) {
    this.changeModel.emit(data);
  }
}
