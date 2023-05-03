import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AscFormComponent } from './component/asc-form/asc-form.component';

const routes: Routes = [
  { path: 'profile/payment/asc-form', component: AscFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
