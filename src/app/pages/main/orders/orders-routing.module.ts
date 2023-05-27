import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersSectionComponent } from './orders-section/orders-section.component';
import { PoDetailPageComponent } from 'src/app/components/po-detail-page/po-detail-page.component';

const routes: Routes = [
  {
    path: 'order-section',
    component: OrdersSectionComponent,
  },
  {
    path: 'order-section/po-details/:poNo',
    component: PoDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
