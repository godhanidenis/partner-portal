import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentSectionComponent } from './payment-section/payment-section.component';
import { PoDetailPageComponent } from 'src/app/components/po-detail-page/po-detail-page.component';

const routes: Routes = [
  {
    path: 'payment-section',
    component: PaymentSectionComponent,
  },
  {
    path: 'payment-section/po-details/:poNo',
    component: PoDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}
