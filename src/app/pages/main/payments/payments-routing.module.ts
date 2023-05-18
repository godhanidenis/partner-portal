import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentSectionComponent } from './payment-section/payment-section.component';

const routes: Routes = [
  {
    path: 'payment-section',
    component: PaymentSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}
