import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-tag',
  templateUrl: './filter-tag.component.html',
  styleUrls: ['./filter-tag.component.scss'],
})
export class FilterTagComponent implements OnInit {
  @Output() closeTag = new EventEmitter();
  @Output() tagRemove = new EventEmitter();
  // @Input() clear_btn: boolean = false;
  @Input() badgeTotal: number = 0;
  @Input() selectLocation = '';
  @Input() selectSku = '';
  @Input() selectCarrier = '';
  @Input() selectDate = '';
  @Input() selectStatus = '';
  @Input() selectRangeDate = '';

  constructor() {}

  ngOnInit(): void {}

  close(type: string) {
    this.closeTag.emit(type);
  }

  tagDelete() {
    this.tagRemove.emit();
  }
}
