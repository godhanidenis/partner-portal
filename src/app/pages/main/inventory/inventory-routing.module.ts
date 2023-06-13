import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ViewInventoryComponent } from './inventory-list/view-inventory/view-inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryListComponent,
  },
  {
    path: 'inventory-feed-details/:feedResult/:feedCode',
    component: ViewInventoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
