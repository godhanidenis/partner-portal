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
      case 'A04':
        this.templateType = 'EDIT_SKU_SPECIFIC_HANDLING_TIME';
        break;
      case 'A05':
        this.templateType = 'EDIT_PRICE';
        break;
      case 'A55':
        this.templateType = 'EDIT_MPN';
        break;
      case 'A26':
        this.templateType = 'ADD_EDIT_ASIN';
        break;
      case 'A20':
        this.templateType = 'EDIT_PRICE';
        break;
      case 'A21':
        this.templateType = 'EDIT_PRICE';
        break;
      case 'A22':
        this.templateType = 'EDIT_PRICE';
        break;
      case 'A06':
        this.templateType = 'ADD_EDIT_MAP';
        break;
      case 'A17':
        this.templateType = 'CHANGE_PRODUCT_STATUS';
        break;
      case 'A18':
        this.templateType = 'CHANGE_PRODUCT_STATUS';
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
