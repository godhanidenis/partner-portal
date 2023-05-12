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
  }

  closeNav() {
    this.sidenavSection.nativeElement.style.width = '0';
    this.contentSection.nativeElement.style.marginRight = '0';
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

  change(value: string, type: string) {
    console.log(value);
    switch (type) {

      case 'brand':
        if (
          value == 'sony' ||
          value == 'dell' ||
          value == 'samsung'
        ) {
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

      case 'inventory':
        if (value == 'inStock' || value == 'outOfStock') {
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
          if (this.collection == 0) {
            this.collection++;
            this.beagetotal++;
          }
        }

        if (value == null) {
          this.collection--;
          this.beagetotal--;
        }
        break;
      case 'asin':
        if (value == 'approved' || value == 'notapproved') {
          if (this.aprove == 0) {
            this.aprove++;
            this.beagetotal++;
          }

         
        }

        break;

        case 'status':
          if (value == 'discontented' || value == 'active' || value == 'restricted') {
            if (this.status == 0) {
              this.status++;
              this.beagetotal++;
            }
          }

          if (value == null) {
            this.status--;
            this.beagetotal--;
          }
      
          break;

          case 'map':
          if (value == 'true' || value == 'false') {
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
