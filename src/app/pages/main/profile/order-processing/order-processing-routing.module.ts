import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePickupAddressComponent } from './manage-pickup-address/manage-pickup-address.component';

const routes: Routes = [
 
  {path: 'shipout-location', component: ManagePickupAddressComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderProcessingRoutingModule {}
