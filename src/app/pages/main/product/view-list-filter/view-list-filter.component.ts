import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list-filter',
  templateUrl: './view-list-filter.component.html',
  styleUrls: ['./view-list-filter.component.scss'],
})
export class ViewListFilterComponent implements OnInit {
  // @ViewChild('content', { static: false }) contentSection!: ElementRef;
  @ViewChild('mySidenav', { static: false }) sidenavSection!: ElementRef;
  // @ViewChild('section', { static: false }) section!: ElementRef;

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

  isDownloadVisible: boolean = false;
  isUploadVisible: boolean = false;
  isImportVisible: boolean = false;

  viewEditProducts!: FormGroup;
  filter!: FormGroup;
  isLoading: boolean = false;
  exportType: string = '';

  stock: number = 0;
  aprove: number = 0;
  productStatus: number = 0;
  mapradio: number = 0;
  brand: number = 0;
  category: number = 0;
  sales: number = 0;
  collection: number = 0;
  beagetotal: number = 0;

  clear_btn: boolean = false;

  inventory: string = '';
  asin: string = '';

  map: string = '';
  selectBrand: string = '';
  selectCollection: string = '';
  selectCategory: string = '';
  selectSales: string = '';
  selectStatus: string = '';

  total = 1;
  pageSize = 50;
  pageIndex = 1;
  pageSizeOptions = [50, 100, 250, 500];
  inputValue?: string;
  dropdown?: string;
  brandFilter: string[] = [];
  collectionFilter: string[] = [];
  categoryFilter: string[] = [];
  salesTireFilter: string[] = [];

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.viewEditProducts = new FormGroup({
      search: new FormControl(''),
    });
    this.filter = new FormGroup({
      inventory: new FormControl(''),
      asin: new FormControl(''),
      productStatus: new FormControl(''),
      map: new FormControl(''),
      brand: new FormControl(''),
      viewSelect: new FormControl(''),
      category: new FormControl(''),
      collection: new FormControl(''),
      salesTire: new FormControl(''),
    });
  }

  navigatePage(path: string) {
    this.router.navigate([`/main/${path}`]);
  }

  openNav() {
    this.sidenavSection.nativeElement.style.width = '280px';
    // this.contentSection.nativeElement.style.marginRight = '280px';
    // this.section.nativeElement.style.minHeight = '88%';
  }

  closeNav() {
    this.sidenavSection.nativeElement.style.width = '0';
    // this.contentSection.nativeElement.style.marginRight = '0';
    // this.section.nativeElement.style.minHeight = 'auto';
  }

  showUploadModal(type: string): void {
    if (type === 'download') {
      this.isDownloadVisible = true;
    } else if (type === 'upload') {
      this.isUploadVisible = true;
    } else {
      this.isImportVisible = true;
    }
  }

  handleOk(type: string): void {
    if (type === 'download') {
      this.isDownloadVisible = false;
    } else {
      this.isUploadVisible = false;
    }
  }

  handleCancel(type: string): void {
    if (type === 'download') {
      this.isDownloadVisible = false;
    } else if (type === 'upload') {
      this.isUploadVisible = false;
    } else {
      this.isImportVisible = false;
    }
  }
  tagfunc() {
    this.inventory = '';
    this.asin = '';
    this.selectStatus = '';
    this.map = '';
    this.selectBrand = '';
    this.selectCollection = '';
    this.selectCategory = '';
    this.selectSales = '';

    this.stock = 0;
    this.aprove = 0;
    this.productStatus = 0;
    this.mapradio = 0;
    this.brand = 0;
    this.category = 0;
    this.collection = 0;
    this.sales = 0;

    this.beagetotal = 0;
    this.clear_btn = false;
    this.filter.reset();
  }

  close(type: string) {
    if (type) {
      switch (type) {
        case 'inventory':
          this.filter.controls['inventory'].reset();
          this.inventory = '';
          this.stock = 0;
          this.beagetotal--;
          break;
        case 'asin':
          this.filter.controls['asin'].reset();
          this.asin = '';
          this.aprove = 0;
          this.beagetotal--;
          break;
        case 'Selectstatus':
          this.filter.controls['productStatus'].reset();
          this.selectStatus = '';
          this.productStatus = 0;
          this.beagetotal--;
          break;
        case 'map':
          this.filter.controls['map'].reset();
          this.map = '';
          this.mapradio = 0;
          this.beagetotal--;
          break;
        case 'selectBrand':
          this.filter.controls['brand'].reset();
          this.selectBrand = '';
          this.brand = 0;
          this.beagetotal--;
          break;
        case 'selectCollection':
          this.filter.controls['collection'].reset();
          this.selectCollection = '';
          this.collection = 0;
          this.beagetotal--;
          break;
        case 'selectCategory':
          this.filter.controls['category'].reset();
          this.selectCategory = '';
          this.category = 0;
          this.beagetotal--;

          break;

        case 'selectSales':
          this.filter.controls['salesTire'].reset();
          this.selectSales = '';
          this.sales = 0;
          this.beagetotal--;
          break;

        default:
          break;
      }
    }
  }

  change(value: string, type: string) {
    if (value) {
      switch (type) {
        case 'brand':
          if (value == 'Sony' || value == 'Dell' || value == 'Samsung') {
            this.clear_btn = true;
            this.selectBrand = value;
            if (this.brand == 0) {
              this.brand++;
              this.beagetotal++;
            }
          }
          break;

        case 'category':
          if (
            value == 'Kid’s Furniture' ||
            value == 'Rugs' ||
            value == 'Tables'
          ) {
            this.clear_btn = true;
            this.selectCategory = value;
            if (this.category == 0) {
              this.category++;
              this.beagetotal++;
            }
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
            value == 'restricted' ||
            value == 'suppressed' ||
            value == 'ltl'
          ) {
            this.clear_btn = true;
            this.selectStatus = value;

            if (this.productStatus == 0) {
              this.productStatus++;
              this.beagetotal++;
            }
          }
          break;

        case 'map':
          if (value == 'true' || value == 'false') {
            this.clear_btn = true;
            this.map = value;

            if (this.mapradio == 0) {
              this.mapradio++;
              this.beagetotal++;
            }
          }
          break;

        case 'collection':
          if (
            value == 'Floral Collection' ||
            value == 'White Collection' ||
            value == 'Kids Collection'
          ) {
            this.clear_btn = true;
            this.selectCollection = value;
            if (this.collection == 0) {
              this.collection++;
              this.beagetotal++;
            }
          }
          break;

        case 'salesTire':
          if (
            value == 'Top Seller' ||
            value == 'Medium Seller' ||
            value == 'Low Seller' ||
            value == 'Slow Seller'
          ) {
            this.clear_btn = true;
            this.selectSales = value;
            if (this.sales == 0) {
              this.sales++;
              this.beagetotal++;
            }
          }
          break;
      }
    } else {
      if (this.beagetotal > 0 && value !== null) {
        switch (type) {
          case 'status':
            this.selectStatus = '';
            this.productStatus--;
            this.beagetotal--;
            break;
          case 'brand':
            this.selectBrand = '';
            this.brand--;
            this.beagetotal--;
            break;
          case 'category':
            this.selectCategory = '';
            this.brand--;
            this.beagetotal--;
            break;
          case 'collection':
            this.selectCollection = '';
            this.collection--;
            this.beagetotal--;
            break;

          case 'salesTire':
            this.selectSales = '';
            this.sales--;
            this.beagetotal--;
            break;
        }
      }
    }
  }
}
