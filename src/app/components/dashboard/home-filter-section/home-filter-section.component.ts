import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-filter-section',
  templateUrl: './home-filter-section.component.html',
  styleUrls: ['./home-filter-section.component.scss'],
})
export class HomeFilterSectionComponent implements OnInit {
  @Output() toggleFilter = new EventEmitter();
  @Output() changeData = new EventEmitter();
  @Input() issueName: string = '';
  @Input() inventory: string = '';
  @Input() asin: string = '';
  @Input() status: string = '';
  @Input() map: string = '';
  @Input() brand: string = '';
  @Input() collection: string = '';
  @Input() category: string = '';
  @Input() salesTire: string = '';

  listOfBrand = ['Sony', 'Dell', 'Samsung'];
  listOfCollection = [
    'Floral Collection',
    'White Collection',
    'Kids Collection',
  ];
  listOfProductCategory = ['Kid’s Furniture', 'Rugs', 'Tables'];
  listOfSalesTier = [
    'Top Seller',
    'Medium Seller',
    'Low Seller',
    'Slow Seller',
  ];

  constructor() {}
  ngOnInit(): void {}

  closeFilter() {
    this.toggleFilter.emit();
  }
  changeValue(value: string, type: string) {
    this.changeData.emit({ value: value, type: type });
  }
}
