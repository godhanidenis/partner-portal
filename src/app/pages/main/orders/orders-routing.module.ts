import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersSectionComponent } from './orders-section/orders-section.component';

const routes: Routes = [
  {
    path: 'order-section',
    component: OrdersSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
