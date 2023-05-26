import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-filter-tag',
  templateUrl: './home-filter-tag.component.html',
  styleUrls: ['./home-filter-tag.component.scss'],
})
export class HomeFilterTagComponent implements OnInit {
  @Output() closeTag = new EventEmitter();
  @Output() tagRemove = new EventEmitter();

  @Input() badgeTotal: number = 0;
  @Input() selectInventory: string = '';
  @Input() selectAsin: string = '';
  @Input() selectStatus: string = '';
  @Input() selectMap: string = '';
  @Input() selectBrand: string = '';
  @Input() selectCollection: string = '';
  @Input() selectCategory: string = '';
  @Input() selectSalesTire: string = '';
  constructor() {}
  ngOnInit(): void {}

  close(type: string) {
    this.closeTag.emit(type);
  }

  tagDelete() {
    this.tagRemove.emit();
  }
}
