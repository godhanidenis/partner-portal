import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoDetailPageComponent } from './po-detail-page/po-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: PoDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
