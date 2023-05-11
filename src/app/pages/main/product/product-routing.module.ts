import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEditProductsComponent } from './view-edit-products/view-edit-products.component';

const routes: Routes = [
 
  { path: '', component: ViewEditProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
