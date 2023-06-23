import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DashboardService } from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-unit-price-conflict',
  templateUrl: './unit-price-conflict.component.html',
  styleUrls: ['./unit-price-conflict.component.scss'],
})
export class UnitPriceConflictComponent implements OnInit {
  @ViewChild('mySidenav', { static: false }) sidenavSection!: ElementRef;

  description: string = `
  Prices will always change. But with price stability, consumers will be able to make more informed decisions about their purchases. Every product has a perceived value and if a product is available at different prices that vary too much, it could result in harming customer trust in the product. Imagine a product retailing at $100.00, and then more retail offers of the same product ranging from $100.00 to $175.00, you as a consumer would lose confidence about the true value of the product, resulting in customer confusion and a potential decrease in sales.
  <br><br>
  However, For these products in your catalog, where there is currently no FBA offer and they must drop ship directly from your shipping facility, the unit price provided to 123Stores exceeds the retail price already updated on Amazon.
  <br><br>
  If the Unit Price provided to 123Stores is incorrect, kindly edit the Unit Price. If you're unhappy with the retail price that is being offered by the conflicting provider, contact the conflicting provider, and get them to correct their retail price, so that customer confusion is avoided. Once the conflicting provider corrects their retail price, the product offers will be automatically updated.
  `;
  addAddressVisible: boolean = false;
  editAddressVisible: boolean = false;
  isLoading: boolean = false;
  total = 1;
  pageSize = 100;
  pageIndex = 1;
  pageSizeOptions = [100];

  uploadModelVisible: boolean = false;
  badgeTotal: number = 0;

  unitPriceConflictList: any[] = [
    {
      id: 1,
      amazonASIN: 'B001PZ7KE8',
      unitPriceProvidedTo123Stores: '14.86',
      allowanceProvidedTo123Stores: '0',
      netUnitPriceProvidedTo123Stores: '14.86',
      retailPriceOnAmazonOfferedByConflictingProvider: '11.99',
      noOfConflictingProviders: '3',
      conflictingProviders: 'KIKURA, Ichiban-Japan, JapanSuperMall',
    },
    // {
    //   id: 2,
    //   amazonASIN: 'B001PZF2IY',
    //   unitPriceProvidedTo123Stores: '20.4',
    //   allowanceProvidedTo123Stores: '0',
    //   netUnitPriceProvidedTo123Stores: '20.4',
    //   retailPriceOnAmazonOfferedByConflictingProvider: '18.95',
    //   noOfConflictingProviders: '1',
    //   conflictingProviders: 'MVTRADINGONLINE(USA)',
    // },
  ];

  modelHeader: string = 'Add';
  primaryContact: number = 1;
  viewData: any;
  viewAddressVisible: boolean = false;

  // selectInventory: string = '';
  // selectAsin: string = '';
  // selectStatus: string = '';
  // selectMap: string = '';
  // selectBrand: string = '';
  // selectCollection: string = '';
  // selectCategory: string = '';
  // selectSalesTire: string = '';

  // inventoryCount: number = 0;
  // asinCount: number = 0;
  // statusCount: number = 0;
  // mapCount: number = 0;
  // brandCount: number = 0;
  // collectionCount: number = 0;
  // categoryCount: number = 0;
  // salesTireCount: number = 0;

  // clear_btn: boolean = false;
  isMultipleProductsVisible: boolean = false;
  editData: { mpn: string; current: number; sku: string } = {
    mpn: 'string',
    current: 0,
    sku: '',
  };
  editLabel: string[] = [];
  isVisible: boolean = false;
  code: any = '';
  product_search: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService,
    private dashboardService: DashboardService
  ) {
    this.code = this.dashboardService.getLastSectionOfUrl(router.url);
    this.getData(this.code, this.product_search);
  }
  ngOnInit(): void {}

  getData(code: string, product_search: string) {
    this.isLoading = true;
    if (this.code) {
      const data = {
        code: code,
        product_search: product_search ? product_search : '',
      };
      this.dashboardService.getAgendasDataByCode(data).subscribe(
        (res: any) => {
          this.isLoading = false;
          if (res.success) {
            this.unitPriceConflictList = res.data;
          }
        },
        (err) => (this.isLoading = false)
      );
    }
  }

  searchValue(event: string) {
    this.product_search = event;
    this.getData(this.code, this.product_search);
  }

  navigateAsin(asin: string) {
    window.open(`https://www.amazon.com/dp/${asin}`);
  }

  matchValue(mpn: string, prize: number, sku: string) {
    this.editData = {
      mpn: mpn,
      current: prize,
      sku: sku,
    };
    this.editLabel = ['MPN', 'Current Unit Price', 'New Unit Price'];
    this.isVisible = true;
  }

  // openNav() {
  //   this.sidenavSection.nativeElement.style.width = '280px';
  // }

  // closeNav() {
  //   this.sidenavSection.nativeElement.style.width = '0';
  // }

  // removeAll() {
  //   this.selectInventory = '';
  //   this.selectAsin = '';
  //   this.selectStatus = '';
  //   this.selectMap = '';
  //   this.selectBrand = '';
  //   this.selectCollection = '';
  //   this.selectCategory = '';
  //   this.selectSalesTire = '';

  //   this.inventoryCount = 0;
  //   this.asinCount = 0;
  //   this.statusCount = 0;
  //   this.mapCount = 0;
  //   this.brandCount = 0;
  //   this.collectionCount = 0;
  //   this.categoryCount = 0;
  //   this.salesTireCount = 0;

  //   this.badgeTotal = 0;
  //   this.clear_btn = false;
  // }

  // close(type: string) {
  //   if (type) {
  //     switch (type) {
  //       case 'inventory':
  //         this.selectInventory = '';
  //         this.inventoryCount = 0;
  //         this.badgeTotal--;
  //         break;
  //       case 'asin':
  //         this.selectAsin = '';
  //         this.asinCount = 0;
  //         this.badgeTotal--;
  //         break;
  //       case 'Selectstatus':
  //         this.selectStatus = '';
  //         this.statusCount = 0;
  //         this.badgeTotal--;
  //         break;
  //       case 'map':
  //         this.selectMap = '';
  //         this.mapCount = 0;
  //         this.badgeTotal--;
  //         break;
  //       case 'selectBrand':
  //         this.selectBrand = '';
  //         this.brandCount = 0;
  //         this.badgeTotal--;
  //         break;
  //       case 'selectCollection':
  //         this.selectCollection = '';
  //         this.collectionCount = 0;
  //         this.badgeTotal--;
  //         break;
  //       case 'selectCategory':
  //         this.selectCategory = '';
  //         this.categoryCount = 0;
  //         this.badgeTotal--;
  //         break;
  //       case 'selectSales':
  //         this.selectSalesTire = '';
  //         this.salesTireCount = 0;
  //         this.badgeTotal--;
  //         break;
  //     }
  //   }
  // }

  // change(data: any) {
  //   if (data.value) {
  //     switch (data.type) {
  //       case 'inventory':
  //         if (data.value === 'inStock' || data.value === 'outOfStock') {
  //           this.clear_btn = true;
  //           this.selectInventory = data.value;
  //           if (this.inventoryCount === 0) {
  //             this.inventoryCount++;
  //             this.badgeTotal++;
  //           }
  //         }
  //         break;
  //       case 'asin':
  //         if (data.value === 'approved' || data.value === 'notapproved') {
  //           this.clear_btn = true;
  //           this.selectAsin = data.value;

  //           if (this.asinCount === 0) {
  //             this.asinCount++;
  //             this.badgeTotal++;
  //             this.clear_btn = true;
  //           }
  //         }
  //         break;
  //       case 'status':
  //         if (
  //           data.value === 'discontented' ||
  //           data.value === 'active' ||
  //           data.value === 'restricted' ||
  //           data.value === 'suppressed' ||
  //           data.value === 'ltl'
  //         ) {
  //           this.clear_btn = true;
  //           this.selectStatus = data.value;

  //           if (this.statusCount === 0) {
  //             this.statusCount++;
  //             this.badgeTotal++;
  //           }
  //         }
  //         break;
  //       case 'map':
  //         if (data.value === 'true' || data.value === 'false') {
  //           this.clear_btn = true;
  //           this.selectMap = data.value;

  //           if (this.mapCount === 0) {
  //             this.mapCount++;
  //             this.badgeTotal++;
  //           }
  //         }
  //         break;
  //       case 'brand':
  //         if (
  //           data.value === 'Sony' ||
  //           data.value === 'Dell' ||
  //           data.value === 'Samsung'
  //         ) {
  //           this.clear_btn = true;
  //           this.selectBrand = data.value;
  //           if (this.brandCount === 0) {
  //             this.brandCount++;
  //             this.badgeTotal++;
  //           }
  //         }
  //         break;
  //       case 'collection':
  //         if (
  //           data.value === 'Floral Collection' ||
  //           data.value === 'White Collection' ||
  //           data.value === 'Kids Collection'
  //         ) {
  //           this.clear_btn = true;
  //           this.selectCollection = data.value;
  //           if (this.collectionCount === 0) {
  //             this.collectionCount++;
  //             this.badgeTotal++;
  //           }
  //         }
  //         break;
  //       case 'category':
  //         if (
  //           data.value === 'Kid’s Furniture' ||
  //           data.value === 'Rugs' ||
  //           data.value === 'Tables'
  //         ) {
  //           this.clear_btn = true;
  //           this.selectCategory = data.value;
  //           if (this.categoryCount === 0) {
  //             this.categoryCount++;
  //             this.badgeTotal++;
  //           }
  //         }
  //         break;
  //       case 'salesTire':
  //         if (
  //           data.value === 'Top Seller' ||
  //           data.value === 'Medium Seller' ||
  //           data.value === 'Low Seller' ||
  //           data.value === 'Slow Seller'
  //         ) {
  //           this.clear_btn = true;
  //           this.selectSalesTire = data.value;
  //           if (this.salesTireCount === 0) {
  //             this.salesTireCount++;
  //             this.badgeTotal++;
  //           }
  //         }
  //         break;
  //     }
  //   } else {
  //     if (this.badgeTotal > 0 && data.value !== null) {
  //       switch (data.type) {
  //         case 'status':
  //           this.selectStatus = '';
  //           this.statusCount--;
  //           this.badgeTotal--;
  //           break;
  //         case 'brand':
  //           this.selectBrand = '';
  //           this.brandCount--;
  //           this.badgeTotal--;
  //           break;
  //         case 'collection':
  //           this.selectCollection = '';
  //           this.collectionCount--;
  //           this.badgeTotal--;
  //           break;
  //         case 'category':
  //           this.selectCategory = '';
  //           this.categoryCount--;
  //           this.badgeTotal--;
  //           break;

  //         case 'salesTire':
  //           this.selectSalesTire = '';
  //           this.salesTireCount--;
  //           this.badgeTotal--;
  //           break;
  //       }
  //     }
  //   }
  // }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
