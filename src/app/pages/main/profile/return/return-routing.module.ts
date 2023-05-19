import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnLocationComponent } from './return-location/return-location.component';
import { ReturnSettingComponent } from './return-setting/return-setting.component';

const routes: Routes = [
  {
    path: 'return-location',
    component: ReturnLocationComponent,
  },
  {
    path: 'return-setting',
    component: ReturnSettingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnRoutingModule {}
