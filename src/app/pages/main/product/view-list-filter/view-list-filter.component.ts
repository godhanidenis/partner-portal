import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list-filter',
  templateUrl: './view-list-filter.component.html',
  styleUrls: ['./view-list-filter.component.scss'],
})
export class ViewListFilterComponent implements OnInit {
  @ViewChild('content', { static: false }) contentSection!: ElementRef;
  @ViewChild('mySidenav', { static: false }) sidenavSection!: ElementRef;
  @ViewChild('section', { static: false }) section!: ElementRef;

  viewEditProducts!: FormGroup;
  uploadmodal!: FormGroup;
  filter!: FormGroup;
  isLoading: boolean = false;

  beage: number = 0;
  brand: number = 0;
  aprove: number = 0;
  collection: number = 0;
  stock: number = 0;
  status: number = 0;
  beagetotal: number = 0;
  clear_btn: boolean = false;

  category: number = 0;
  selectCategory: string = '';
  selectBrand: string = '';
  inventory: string = '';
  viewSelect: string = '';
  asin: string = '';
  Selectstatus: string = '';
  map: string = '';

  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];
  inputValue?: string;
  dropdown?: string;
  filteredOptions: string[] = [];
  options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

  listOfOption = ['Option 01', 'Option 02'];

  data = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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

  constructor(private router: Router) {
    this.filteredOptions = this.options;
  }

  ngOnInit(): void {
    this.viewEditProducts = new FormGroup({
      search: new FormControl(''),
    });
    this.uploadmodal = new FormGroup({
      export: new FormControl(''),
    });
    this.filter = new FormGroup({
      brand: new FormControl(''),
      inventory: new FormControl(''),
      viewSelect: new FormControl(''),
      asin: new FormControl(''),
      status: new FormControl(''),
      map: new FormControl(''),
      category: new FormControl(''),
      salesTire: new FormControl(''),
      collection: new FormControl(''),
    });
  }

  navigatePage(path: string) {
    this.router.navigate([`/main/${path}`]);
  }

  onChange(value: string): void {
    this.filteredOptions = this.options.filter(
      (option) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  openNav() {
    this.sidenavSection.nativeElement.style.width = '280px';
    this.contentSection.nativeElement.style.marginRight = '280px';
    this.section.nativeElement.style.minHeight = '97%';
  }

  closeNav() {
    this.sidenavSection.nativeElement.style.width = '0';
    this.contentSection.nativeElement.style.marginRight = '0';
    this.section.nativeElement.style.minHeight = 'auto';
  }

  isVisible = false;

  showUploadModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
  tagfunc() {
    this.selectBrand = '';
    this.inventory = '';
    this.viewSelect = '';
    this.asin = '';
    this.Selectstatus = '';
    this.map = '';
    this.beagetotal = 0;
    this.clear_btn = false;
    this.filter.reset();
  }

  inventoryOnClose() {
    this.filter.controls['inventory'].reset();
    this.beagetotal--;
    this.inventory = '';
  }

  categoryOnClose() {
    this.filter.controls['selectCategory'].reset();
    this.beagetotal--;
    this.selectCategory = '';
  }
  viewSelectOnClose() {
    this.filter.controls['viewSelect'].reset();
    this.viewSelect = '';
  }
  asinOnClose() {
    this.filter.controls['asin'].reset();
    this.beagetotal--;
    this.asin = '';
  }
  selectstatusOnClose() {
    this.filter.controls['status'].reset();
    this.Selectstatus = '';
  }
  mapOnClose() {
    this.filter.controls['map'].reset();
    this.beagetotal--;
    this.map = '';
  }

  change(value: string, type: string) {
    console.log(value);
    switch (type) {
      case 'brand':
        if (value == 'sony' || value == 'dell' || value == 'samsung') {
          this.clear_btn = true;
          this.selectBrand = value;
          if (this.brand == 0) {
            this.brand++;
            this.beagetotal++;
          }
        }

        if (value == null) {
          this.brand--;
          this.beagetotal--;
        }
        break;

      case 'category':
        if (value == 'kidFurniture' || value == 'rugs' || value == 'tables') {
          this.clear_btn = true;
          this.selectCategory = value;
          if (this.category == 0) {
            this.category++;
            this.beagetotal++;
          }
        }

        if (value == null) {
          this.brand--;
          this.beagetotal--;
        }
        break;

      case 'inventory':
        if (value == 'inStock' || value == 'outOfStock') {
          this.clear_btn = true;
          this.inventory = value;
          if (this.stock == 0) {
            this.stock++;
            this.beagetotal++;
          }
        }

        break;
      case 'viewSelect':
        if (
          value == 'collection' ||
          value == 'category' ||
          value == 'salesTire'
        ) {
          this.clear_btn = true;
          this.viewSelect = value;
          if (this.collection == 0) {
            this.collection++;
            this.beagetotal++;
          }
        }

        if (value == null) {
          this.collection--;
          this.beagetotal--;
          this.viewSelect = '';
        }
        break;
      case 'asin':
        if (value == 'approved' || value == 'notapproved') {
          this.clear_btn = true;
          this.asin = value;

          if (this.aprove == 0) {
            this.aprove++;
            this.beagetotal++;
            this.clear_btn = true;
          }
        }

        break;

      case 'status':
        if (
          value == 'discontented' ||
          value == 'active' ||
          value == 'restricted'
        ) {
          this.clear_btn = true;
          this.Selectstatus = value;

          if (this.status == 0) {
            this.status++;
            this.beagetotal++;
          }
        }

        if (value == null) {
          this.status--;
          this.beagetotal--;
          this.Selectstatus = '';
        }

        break;

      case 'map':
        if (value == 'true' || value == 'false') {
          this.clear_btn = true;
          this.map = value;

          if (this.beage == 0) {
            this.beage++;
            this.beagetotal++;
          }
        }
        break;

      default:
        break;
    }
  }
}
