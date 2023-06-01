import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recommendation-issue-table',
  templateUrl: './recommendation-issue-table.component.html',
  styleUrls: ['./recommendation-issue-table.component.scss'],
})
export class RecommendationIssueTableComponent implements OnInit {
  @Input() total: number = 1;
  @Input() pageSize: number = 50;
  @Input() pageIndex: number = 1;
  @Input() isLoading: boolean = false;
  @Input() listOfData: any[] = [];
  @Input() tabName: string = '';

  @Output() changeModel = new EventEmitter();

  pageSizeOptions = [50, 100, 250, 500];

  constructor() {}
  ngOnInit(): void {}

  selectAction(data: string) {
    this.changeModel.emit(data);
  }
}
