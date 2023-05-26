import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceCorrectionComponent } from './price-correction/price-correction.component';
import { LackOfSalesDemandComponent } from './lack-of-sales-demand/lack-of-sales-demand.component';
import { ProductsLosingImportanceOnAmazonComponent } from './products-losing-importance-on-amazon/products-losing-importance-on-amazon.component';
import { ShippingLabelComponent } from './shipping-label/shipping-label.component';

const routes: Routes = [
  {
    path: 'price-correction',
    component: PriceCorrectionComponent,
  },
  {
    path: 'lack-of-sales-demand',
    component: LackOfSalesDemandComponent,
  },
  {
    path: 'products-losing-importance-on-amazon',
    component: ProductsLosingImportanceOnAmazonComponent,
  },
  {
    path: 'shipping-label',
    component: ShippingLabelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecommendationIssuesRoutingModule {}
