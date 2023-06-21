import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandlingTimeConflictComponent } from './handling-time-conflict/handling-time-conflict.component';
import { UnitPriceConflictComponent } from './unit-price-conflict/unit-price-conflict.component';
import { MapConflictComponent } from './map-conflict/map-conflict.component';
import { RestrictedDiscontinuedComponent } from './restricted-discontinued/restricted-discontinued.component';
import { RestrictedCannotShipGroundComponent } from './restricted-cannot-ship-ground/restricted-cannot-ship-ground.component';
import { RestrictedViaReturnsComponent } from './restricted-via-returns/restricted-via-returns.component';
import { IncompleteOfferComponent } from './incomplete-offer/incomplete-offer.component';
import { StrandedInFeedComponent } from './stranded-in-feed/stranded-in-feed.component';
import { StrandedInCatalogComponent } from './stranded-in-catalog/stranded-in-catalog.component';
import { DiscontinuedUpdateComponent } from './discontinued-update/discontinued-update.component';
import { RestrictedViaOrderComponent } from './restricted-via-order/restricted-via-order.component';
import { RestrictedProductPriceErrorComponent } from './restricted-product-price-error/restricted-product-price-error.component';

const routes: Routes = [
  {
    path: 'handling-time-conflict/:code',
    component: HandlingTimeConflictComponent,
  },
  {
    path: 'unit-price-conflict/:code',
    component: UnitPriceConflictComponent,
  },
  {
    path: 'map-conflict/:code',
    component: MapConflictComponent,
  },
  {
    path: 'restricted-via-order/:code',
    component: RestrictedViaOrderComponent,
  },
  {
    path: 'restricted-discontinued/:code',
    component: RestrictedDiscontinuedComponent,
  },
  {
    path: 'restricted-product-price-error/:code',
    component: RestrictedProductPriceErrorComponent,
  },
  {
    path: 'restricted-cannot-ship-ground/:code',
    component: RestrictedCannotShipGroundComponent,
  },
  {
    path: 'restricted-via-returns/:code',
    component: RestrictedViaReturnsComponent,
  },
  {
    path: 'incomplete-offer/:code',
    component: IncompleteOfferComponent,
  },
  {
    path: 'stranded-in-feed/:code',
    component: StrandedInFeedComponent,
  },
  {
    path: 'stranded-in-catalog/:code',
    component: StrandedInCatalogComponent,
  },
  {
    path: 'discontinued-update/:code',
    component: DiscontinuedUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceIssuesRoutingModule {}
