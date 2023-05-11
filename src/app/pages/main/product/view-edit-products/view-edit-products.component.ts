import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-edit-products',
  templateUrl: './view-edit-products.component.html',
  styleUrls: ['./view-edit-products.component.scss'],
})
export class ViewEditProductsComponent implements OnInit {
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];
  viewEditProducts!: FormGroup;

  data = [
    {
      mpn: 'powershell',
      productName: 'sunglass',
      unitPrice: '1200',
      brand: 'Aviator',
      productStatus: 'yes',
      asinStatus: 'deep Copy',
      inventory: 'yes',
      map: 'New York'
    },
    {
      mpn: 'circle',
      productName: 'keyboard',
      unitPrice: '1340',
      brand: 'cruse',
      productStatus: 'yes',
      asinStatus: 'First Copy',
      inventory: 'no',
      map: 'paris'
    },
    {
      mpn: 'build',
      productName: 'bottle',
      unitPrice: '1780',
      brand: 'denim',
      productStatus: 'yes',
      asinStatus: 'deep Copy',
      inventory: 'yes',
      map: 'dubai'
    },
    
  ];

  constructor() {}

  ngOnInit(): void {
    this.viewEditProducts = new FormGroup({
      search: new FormControl(''),
    })
  }
}
