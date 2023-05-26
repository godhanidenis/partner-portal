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

const routes: Routes = [
  {
    path: 'handling-time-conflict',
    component: HandlingTimeConflictComponent,
  },
  {
    path: 'unit-price-conflict',
    component: UnitPriceConflictComponent,
  },
  {
    path: 'map-conflict',
    component: MapConflictComponent,
  },
  {
    path: 'restricted-discontinued',
    component: RestrictedDiscontinuedComponent,
  },
  {
    path: 'restricted-cannot-ship-ground',
    component: RestrictedCannotShipGroundComponent,
  },
  {
    path: 'restricted-via-returns',
    component: RestrictedViaReturnsComponent,
  },
  {
    path: 'incomplete-offer',
    component: IncompleteOfferComponent,
  },
  {
    path: 'stranded-in-feed',
    component: StrandedInFeedComponent,
  },
  {
    path: 'stranded-in-catalog',
    component: StrandedInCatalogComponent,
  },
  {
    path: 'discontinued-update',
    component: DiscontinuedUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceIssuesRoutingModule {}
