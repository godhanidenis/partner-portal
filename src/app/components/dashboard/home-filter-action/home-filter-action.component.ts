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
  isFiltersVisible: boolean = true;

  constructor() {}
  ngOnInit(): void {
    this.isFiltersVisible =
      this.issueName !== '1' &&
      this.issueName !== '2' &&
      this.issueName !== '3' &&
      this.issueName !== '13' &&
      this.issueName !== '14' &&
      this.issueName !== '15' &&
      this.issueName !== '9' &&
      this.issueName !== '11' &&
      this.issueName !== '12';
  }

  openFilterSection() {
    this.showFilter.emit();
  }
}
