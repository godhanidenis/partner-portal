import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnLocationComponent } from './return-location/return-location.component';

const routes: Routes = [
  {
    path: 'return-location',
    component: ReturnLocationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnRoutingModule {}
