import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ViewInventoryComponent } from './inventory-list/view-inventory/view-inventory.component';

const routes: Routes = [
  {
    path: 'inventory-list',
    component: InventoryListComponent,
  },
  {
    path: 'inventory-list/view-inventory/:id',
    component: ViewInventoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
