import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Filters } from 'src/app/pages/main/product/view-list-filter/view-list-filter.component';
import {
  DashboardService,
  ExportDash,
} from 'src/app/shared/service/dashboard.service';
import { InventoryService } from 'src/app/shared/service/inventory.service';
import { ProductService } from 'src/app/shared/service/product.service';
import { PromotionsService } from 'src/app/shared/service/promotions.service';

@Component({
  selector: 'app-export-model',
  templateUrl: './export-model.component.html',
  styleUrls: ['./export-model.component.scss'],
})
export class ExportModelComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() exportType: boolean = false;
  @Input() description: string = '';
  @Input() listOfFilter: any = '';
  @Input() noOfFilter: number = 0;
  @Input() sectionName: string = '';
  @Input() code: string = '';
  @Input() showFilterOptions: boolean = true;
  userEmail: string = 'service@123stores.com';
  isDownloadVisible: boolean = false;
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
    private message: NzMessageService,
    private inventoryService: InventoryService,
    private promotionsService: PromotionsService,
    private dashboardService: DashboardService
  ) {}
  ngOnInit(): void {}

  submit() {
    this.isLoading = true;
    if (this.sectionName === 'product') {
      let filters: any = {};

      filters['filter_product_status'] = this.exportType
        ? this.listOfFilter?.filter_product_status
        : '';

      filters['filter_inventory_status'] = this.exportType
        ? this.listOfFilter?.filter_inventory_status
        : '';

      filters['filter_brand'] = this.exportType
        ? this.listOfFilter?.filter_brand
        : '';

      filters['filter_collection'] = this.exportType
        ? this.listOfFilter?.filter_collection
        : '';

      filters['filter_product_category'] = this.exportType
        ? this.listOfFilter?.filter_product_category
        : '';

      filters['filter_sales_tier'] = this.exportType
        ? this.listOfFilter?.filter_sales_tier
        : '';

      this.productService.exportProducts(filters).subscribe(
        (response: any) => {
          console.log(response);
          if (response.success) {
            this.message.create(
              'success',
              'Export mail has been sent successfully!'
            );
          }
          this.handleCancel();
          this.isLoading = false;
        },
        (err) => (this.isLoading = false)
      );
    } else if (this.sectionName === 'inventory') {
      let filters: any = {};
      filters['filter_start_date'] = this.exportType
        ? this.listOfFilter?.filter_start_date
        : '';
      filters['filter_end_date'] = this.exportType
        ? this.listOfFilter?.filter_end_date
        : '';
      filters['filter_inventory_method'] = this.exportType
        ? this.listOfFilter?.filter_inventory_method
        : '';
      filters['filter_feed_result'] = this.exportType
        ? this.listOfFilter?.filter_inventory_result
        : '';
      this.inventoryService.inventoryFeedHistory(filters).subscribe(
        (response: any) => {
          console.log(response);
          if (response.success) {
            this.message.create(
              'success',
              'Export mail has been sent successfully!'
            );
          }
          this.handleCancel();
          this.isLoading = false;
        },
        (err: any) => (this.isLoading = false)
      );
    } else if (this.sectionName === 'promotion') {
      let filters: any = {};

      filters['filter_promo_status'] = this.exportType
        ? this.listOfFilter?.promo_status
        : '';
      filters['filter_start_date'] = this.exportType
        ? this.listOfFilter?.start_date
        : '';
      filters['filter_end_date'] = this.exportType
        ? this.listOfFilter?.end_date
        : '';
      this.promotionsService.exportPromo(filters).subscribe(
        (response: any) => {
          console.log(response);
          if (response.success) {
            this.message.create(
              'success',
              'Export mail has been sent successfully!'
            );
          }
          this.handleCancel();
          this.isLoading = false;
        },
        (err: any) => (this.isLoading = false)
      );
    } else if (!this.showFilterOptions) {
      const data: ExportDash = {
        code: this.code,
      };
      this.dashboardService.exportData(data).subscribe(
        (res: any) => {
          console.log(res);
          if (res.success) {
            this.message.create(
              'success',
              'Export mail has been sent successfully!'
            );
          }
          this.handleCancel();
          this.isLoading = false;
        },
        (err) => (this.isLoading = false)
      );
    }
  }

  handleCancel() {
    this.close.emit();
  }
}
