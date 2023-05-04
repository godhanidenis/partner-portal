import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AchSetUpComponent } from './ach-set-up/ach-set-up.component';

const routes: Routes = [{ path: 'ach-set-up', component: AchSetUpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsRoutingModule {}
