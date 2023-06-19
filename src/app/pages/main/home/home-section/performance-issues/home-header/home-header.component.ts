import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  @Input() description: string = '';
  @Input() tabName: string = '';
  templateType: string = '';
  isMultipleProductsVisible: boolean = false;
  isVisible: boolean = false;
  referenceCode: string = '';
  constructor() {}
  ngOnInit(): void {
    switch (this.tabName) {
      case 'Handling Time Conflict':
        this.templateType = 'EDIT_SKU_SPECIFIC_HANDLING_TIME';
        break;
      case 'Unit Price Conflict':
        this.templateType = 'EDIT_PRICE';
        break;
      case 'MAP Conflict':
        this.templateType = 'EDIT_MPN';
        break;
      case 'Price Correction':
        this.templateType = 'EDIT_PRICE';
        break;
      case 'Lack Of Sales Demand':
        this.templateType = 'EDIT_PRICE';
        break;
      case 'Products Losing Importance On Amazon':
        this.templateType = 'EDIT_PRICE';
        break;
      default:
        break;
    }
  }

  closeMultiProduct(event: string) {
    if (event) {
      this.referenceCode = event;
      this.isVisible = true;
    }
    this.isMultipleProductsVisible = false;
  }
}
