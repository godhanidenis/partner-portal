import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-edit-products',
  templateUrl: './view-edit-products.component.html',
  styleUrls: ['./view-edit-products.component.scss'],
})
export class ViewEditProductsComponent implements OnInit {
  @ViewChild('content', { static: false }) contentSection!: ElementRef;
  @ViewChild('mySidenav', { static: false }) sidenavSection!: ElementRef;

  viewEditProducts!: FormGroup;
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];
  inputValue?: string;
  filteredOptions: string[] = [];
  options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

  data = [
    {
      mpn: 'powershell',
      productName: 'sunglass',
      unitPrice: '1200',
      brand: 'Aviator',
      productStatus: 'yes',
      asinStatus: 'deep Copy',
      inventory: 'yes',
      map: 'New York',
    },
    {
      mpn: 'circle',
      productName: 'keyboard', 
      unitPrice: '1340', 
      brand: 'cruse',
      productStatus: 'yes',
      asinStatus: 'First Copy',
      inventory: 'no',
      map: 'paris',
    },
    {
      mpn: 'build',
      productName: 'bottle',
      unitPrice: '1780',
      brand: 'denim',
      productStatus: 'yes',
      asinStatus: 'deep Copy',
      inventory: 'yes',
      map: 'dubai',
    },
  ];

  constructor() {
    this.filteredOptions = this.options;
  }

  ngOnInit(): void {
    this.viewEditProducts = new FormGroup({
      search: new FormControl(''),
    });
  }

  onChange(value: string): void {
    this.filteredOptions = this.options.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  openNav() {
    this.sidenavSection.nativeElement.style.width = '280px';
    this.contentSection.nativeElement.style.marginRight = '280px';
  }

  closeNav() {
    this.sidenavSection.nativeElement.style.width = '0';
    this.contentSection.nativeElement.style.marginRight = '0';
  }


}
