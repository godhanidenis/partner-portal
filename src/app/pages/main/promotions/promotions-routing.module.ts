import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionDetailsComponent } from './promotions/promotion-details/promotion-details.component';

const routes: Routes = [
  {
    path: '',
    component: PromotionsComponent,
  },
  {
    path: 'promotion-details',
    component: PromotionDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromotionsRoutingModule {}
