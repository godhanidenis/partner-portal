import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-edit-multiple-products',
  templateUrl: './add-edit-multiple-products.component.html',
  styleUrls: ['./add-edit-multiple-products.component.scss'],
})
export class AddEditMultipleProductsComponent implements OnInit {
  @Output() closeModel = new EventEmitter();
  isUploadVisible: boolean = false;
  chooseType = [
    'Add Product',
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
  ngOnInit(): void {}

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
