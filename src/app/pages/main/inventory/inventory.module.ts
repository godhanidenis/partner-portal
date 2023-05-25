import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ViewInventoryComponent } from './inventory-list/view-inventory/view-inventory.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderProcessingModule } from '../profile/order-processing/order-processing.module';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  declarations: [InventoryListComponent, ViewInventoryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    OrderProcessingModule,
    ComponentModule,
  ],
})
export class InventoryModule {}
