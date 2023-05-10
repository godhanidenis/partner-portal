import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnRoutingModule } from './return-routing.module';
import { ReturnLocationComponent } from './return-location/return-location.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderProcessingModule } from '../order-processing/order-processing.module';

@NgModule({
  declarations: [ReturnLocationComponent],
  imports: [
    CommonModule,
    ReturnRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    OrderProcessingModule,
  ],
})
export class ReturnModule {}
