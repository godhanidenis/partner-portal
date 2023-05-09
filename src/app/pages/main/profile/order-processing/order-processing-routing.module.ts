import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPickupAddressComponent } from './manage-pickup-address/add-pickup-address/add-pickup-address.component';
import { ManagePickupAddressComponent } from './manage-pickup-address/manage-pickup-address.component';
import { PoLabelAndInvoicePreferencesComponent } from './po-label-and-invoice-preferences/po-label-and-invoice-preferences.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { CourierPreferencesComponent } from './courier-preferences/courier-preferences.component';

const routes: Routes = [
  {
    path: 'manage-pickup-address/add-pickup-address',
    component: AddPickupAddressComponent,
  },
  { path: 'manage-pickup-address', component: ManagePickupAddressComponent },
  {
    path: 'po-label-and-invoice-preferences',
    component: PoLabelAndInvoicePreferencesComponent,
  },
  {
    path: 'holidays',
    component: HolidaysComponent,
  },
  {
    path: 'courier-preferences',
    component: CourierPreferencesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderProcessingRoutingModule {}
