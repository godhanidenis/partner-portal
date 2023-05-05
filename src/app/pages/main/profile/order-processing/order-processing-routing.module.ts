import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPickupAddressComponent } from './manage-pickup-address/add-pickup-address/add-pickup-address.component';

const routes: Routes = [
  {
    path: 'manage-pickup-address/add-pickup-address',
    component: AddPickupAddressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderProcessingRoutingModule {}
