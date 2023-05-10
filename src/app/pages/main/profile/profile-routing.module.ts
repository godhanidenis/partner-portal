import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  {
    path: 'company',
    loadChildren: () =>
      import('./company/company.module').then((m) => m.CompanyModule),
  },
  {
    path: 'order-processing',
    loadChildren: () =>
      import('./order-processing/order-processing.module').then(
        (m) => m.OrderProcessingModule
      ),
  },
  {
    path: 'return',
    loadChildren: () =>
      import('./return/return.module').then((m) => m.ReturnModule),
  },
  {
    path: 'allowances',
    loadChildren: () =>
      import('./allowances/allowances.module').then((m) => m.AllowancesModule),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./payments/payments.module').then((m) => m.PaymentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
