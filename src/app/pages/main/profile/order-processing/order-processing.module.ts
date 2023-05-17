import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderProcessingRoutingModule } from './order-processing-routing.module';
import { AddPickupAddressComponent } from './manage-pickup-address/add-pickup-address/add-pickup-address.component';
import { ManagePickupAddressComponent } from './manage-pickup-address/manage-pickup-address.component';
import { UploadModelComponent } from './manage-pickup-address/upload-model/upload-model.component';
import { PoLabelAndInvoicePreferencesComponent } from './po-label-and-invoice-preferences/po-label-and-invoice-preferences.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { CourierPreferencesComponent } from './courier-preferences/courier-preferences.component';
import { ViewPickupAddressComponent } from './manage-pickup-address/view-pickup-address/view-pickup-address.component';

@NgModule({
  declarations: [
    AddPickupAddressComponent,
    ManagePickupAddressComponent,
    UploadModelComponent,
    PoLabelAndInvoicePreferencesComponent,
    HolidaysComponent,
    CourierPreferencesComponent,
    ViewPickupAddressComponent,
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
  exports: [
    AddPickupAddressComponent,
    ViewPickupAddressComponent,
    UploadModelComponent,
  ],
})
export class OrderProcessingModule {}
