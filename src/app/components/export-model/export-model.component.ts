import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Filters } from 'src/app/pages/main/product/view-list-filter/view-list-filter.component';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-export-model',
  templateUrl: './export-model.component.html',
  styleUrls: ['./export-model.component.scss'],
})
export class ExportModelComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Input() exportType: string = 'A';
  @Input() description: string = '';
  @Input() listOfFilter: any = '';
  @Input() noOfFilter: number = 0;
  userEmail: string = 'service@123stores.com';
  isDownloadVisible: boolean = false;
  isLoading: boolean = false;

  constructor(private productService: ProductService) {}
  ngOnInit(): void {}

  submit() {
    this.isLoading = true;
    let filters: any = {
      partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
      user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
    };
    if (this.listOfFilter.filter_product_status) {
      filters['filter_product_status'] =
        this.listOfFilter.filter_product_status;
    }
    if (this.listOfFilter.filter_inventory_status) {
      filters['filter_inventory_status'] =
        this.listOfFilter.filter_inventory_status;
    }
    if (this.listOfFilter.filter_brand) {
      filters['filter_brand'] = this.listOfFilter.filter_brand;
    }
    if (this.listOfFilter.filter_collection) {
      filters['filter_collection'] = this.listOfFilter.filter_collection;
    }
    if (this.listOfFilter.filter_product_category) {
      filters['filter_product_category'] =
        this.listOfFilter.filter_product_category;
    }
    if (this.listOfFilter.filter_sales_tier) {
      filters['filter_sales_tier'] = this.listOfFilter.filter_sales_tier;
    }

    this.productService.exportProducts(filters).subscribe(
      (response) => {
        console.log(response);
        this.handleCancel();
        this.isLoading = false;
      },
      (err) => (this.isLoading = false)
    );
  }

  handleCancel() {
    this.close.emit();
  }
}
