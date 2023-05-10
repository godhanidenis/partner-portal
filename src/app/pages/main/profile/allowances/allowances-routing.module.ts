import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RebateComponent } from './rebate/rebate.component';
import { CoOpComponent } from './co-op/co-op.component';

const routes: Routes = [
  {
    path: 'rebate',
    component: RebateComponent,
  },
  {
    path: 'co-op',
    component: CoOpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllowancesRoutingModule {}
