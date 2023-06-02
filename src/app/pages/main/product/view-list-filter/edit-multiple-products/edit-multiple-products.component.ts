import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-multiple-products',
  templateUrl: './edit-multiple-products.component.html',
  styleUrls: ['./edit-multiple-products.component.scss'],
})
export class EditMultipleProductsComponent implements OnInit {
  @Output() closeModel = new EventEmitter();
  @Input() templateType: string = '';
  @Input() actionType: string = '';
  selectType: string = '';
  isUploadVisible: boolean = false;
  chooseType = [
    // 'Add Product',
    'Edit Full Catalog',
    'Edit MPN',
    'Add/Edit ASIN',
    'Add/Edit UPC',
    'Edit Price',
    'Add/Edit MAP',
    'Edit SKU specific Handling time',
    'Edit Shipping Dimensions',
    'Edit Product Details',
    'Remove ASIN',
    'Remove UPC',
    'Change Product Status',
  ];
  name = new FormControl('');

  constructor() {}
  ngOnInit(): void {
    if (this.templateType) {
      this.selectType = this.templateType;
    }
  }

  actionFile(type: string) {
    if (type === 'upload') {
      this.isUploadVisible = true;
    } else {
    }
  }

  handleCancel(type: string) {
    if (type === 'upload') {
      this.isUploadVisible = false;
    } else {
      this.closeModel.emit();
    }
  }
}
