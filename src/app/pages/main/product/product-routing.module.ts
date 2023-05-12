import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListFilterComponent } from './view-list-filter/view-list-filter.component';

const routes: Routes = [
  { path: 'view-list-filter', component: ViewListFilterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
