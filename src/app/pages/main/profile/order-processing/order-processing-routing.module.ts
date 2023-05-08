import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPickupAddressComponent } from './manage-pickup-address/add-pickup-address/add-pickup-address.component';
import { ManagePickupAddressComponent } from './manage-pickup-address/manage-pickup-address.component';

const routes: Routes = [
  {
    path: 'manage-pickup-address/add-pickup-address',
    component: AddPickupAddressComponent,
  },
  { path: 'manage-pickup-address', component: ManagePickupAddressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderProcessingRoutingModule {}
