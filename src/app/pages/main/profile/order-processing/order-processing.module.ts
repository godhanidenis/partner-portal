import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderProcessingRoutingModule } from './order-processing-routing.module';
import { ManagePickupAddressComponent } from './manage-pickup-address/manage-pickup-address.component';

@NgModule({
  declarations: [
    ManagePickupAddressComponent
  ],
  imports: [
    OrderProcessingRoutingModule,
    NzLayoutModule,
    CommonModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
})
export class OrderProcessingModule {}
