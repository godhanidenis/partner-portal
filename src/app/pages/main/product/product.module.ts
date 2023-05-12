import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ViewListFilterComponent } from './view-list-filter/view-list-filter.component';
import { AddEditProductComponent } from './view-list-filter/add-edit-product/add-edit-product.component';
import { ViewSingleProductComponent } from './view-list-filter/view-single-product/view-single-product.component';

@NgModule({
  declarations: [ViewListFilterComponent, AddEditProductComponent, ViewSingleProductComponent],
  imports: [
    ProductRoutingModule,
    NzLayoutModule,
    CommonModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
})
export class ProductModule {}
