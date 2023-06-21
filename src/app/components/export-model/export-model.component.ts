import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Filters } from 'src/app/pages/main/product/view-list-filter/view-list-filter.component';
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
  @Input() showFilterOptions: boolean = true;
  userEmail: string = 'service@123stores.com';
  isDownloadVisible: boolean = false;
  isLoading: boolean = false;

  constructor(
    private productService: ProductService,
    private message: NzMessageService,
    private inventoryService: InventoryService,
    private promotionsService: PromotionsService
  ) {}
  ngOnInit(): void {}

  submit() {
    this.isLoading = true;
    if (this.sectionName === 'product') {
      let filters: any = {
        partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
        user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
      };

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
            this.message.create('success', 'Product export successfully!');
          }
          this.handleCancel();
          this.isLoading = false;
        },
        (err) => (this.isLoading = false)
      );
    } else if (this.sectionName === 'inventory') {
      let filters: any = {
        partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
        user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
      };
      console.log(this.exportType);

      filters['filter_start_date'] = this.exportType
        ? this.listOfFilter?.filter_start_date
        : '';
      filters['filter_end_date'] = this.exportType
        ? this.listOfFilter?.filter_end_date
        : '';
      filters['filter_inventory_method'] = this.exportType
        ? this.listOfFilter?.filter_inventory_method
        : '';
      filters['filter_inventory_result'] = this.exportType
        ? this.listOfFilter?.filter_inventory_result
        : '';
      this.inventoryService.inventoryFeedHistory(filters).subscribe(
        (response: any) => {
          console.log(response);
          if (response.success) {
            this.message.create('success', 'Inventory export successfully!');
          }
          this.handleCancel();
          this.isLoading = false;
        },
        (err: any) => (this.isLoading = false)
      );
    } else if (this.sectionName === 'promotion') {
      let filters: any = {
        partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
        user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
      };
      filters['promo_status'] = this.exportType
        ? this.listOfFilter?.promo_status
        : '';
      filters['start_date'] = this.exportType
        ? this.listOfFilter?.start_date
        : '';
      filters['end_date'] = this.exportType ? this.listOfFilter?.end_date : '';
      this.promotionsService.exportPromo(filters).subscribe(
        (response: any) => {
          console.log(response);
          if (response.success) {
            this.message.create('success', 'Promotion export successfully!');
          }
          this.handleCancel();
          this.isLoading = false;
        },
        (err: any) => (this.isLoading = false)
      );
    }
  }

  handleCancel() {
    this.close.emit();
  }
}
