import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-filter-action',
  templateUrl: './home-filter-action.component.html',
  styleUrls: ['./home-filter-action.component.scss'],
})
export class HomeFilterActionComponent implements OnInit {
  @Input() badgeTotal: number = 0;
  @Input() issueName: string = '';
  @Output() showFilter = new EventEmitter();

  searchValue: string = '';
  exportType: boolean = false;
  isDownloadVisible: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  openFilterSection() {
    this.showFilter.emit();
  }
}
