import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';
import { HandlingTimeConflictComponent } from './home-section/handling-time-conflict/handling-time-conflict.component';
import { DiscontinuedUpdateComponent } from './home-section/discontinued-update/discontinued-update.component';
import { StrandedInCatalogComponent } from './home-section/stranded-in-catalog/stranded-in-catalog.component';
import { StrandedInFeedComponent } from './home-section/stranded-in-feed/stranded-in-feed.component';
import { IncompleteOfferComponent } from './home-section/incomplete-offer/incomplete-offer.component';
import { RestrictedViaReturnsComponent } from './home-section/restricted-via-returns/restricted-via-returns.component';
import { RestrictedCannotShipGroundComponent } from './home-section/restricted-cannot-ship-ground/restricted-cannot-ship-ground.component';
import { RestrictedDiscontinuedComponent } from './home-section/restricted-discontinued/restricted-discontinued.component';
import { MapConflictComponent } from './home-section/map-conflict/map-conflict.component';
import { UnitPriceConflictComponent } from './home-section/unit-price-conflict/unit-price-conflict.component';

const routes: Routes = [
  { path: '', component: HomeSectionComponent },
  {
    path: 'handling-time-conflict',
    component: HandlingTimeConflictComponent,
  },
  {
    path: 'dashboard/unit-price-conflict',
    component: UnitPriceConflictComponent,
  },
  {
    path: 'dashboard/map-conflict',
    component: MapConflictComponent,
  },
  {
    path: 'dashboard/restricted-discontinued',
    component: RestrictedDiscontinuedComponent,
  },
  {
    path: 'dashboard/restricted-cannot-ship-ground',
    component: RestrictedCannotShipGroundComponent,
  },
  {
    path: 'dashboard/restricted-via-returns',
    component: RestrictedViaReturnsComponent,
  },
  {
    path: 'dashboard/incomplete-offer',
    component: IncompleteOfferComponent,
  },
  {
    path: 'dashboard/stranded-in-feed',
    component: StrandedInFeedComponent,
  },
  {
    path: 'dashboard/stranded-in-catalog',
    component: StrandedInCatalogComponent,
  },
  {
    path: 'dashboard/discontinued-update',
    component: DiscontinuedUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
