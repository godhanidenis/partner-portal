import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceIssuesRoutingModule } from './performance-issues-routing.module';
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
import { ComponentModule } from 'src/app/components/component.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from '../../../product/product.module';

@NgModule({
  declarations: [
    HandlingTimeConflictComponent,
    UnitPriceConflictComponent,
    MapConflictComponent,
    RestrictedDiscontinuedComponent,
    RestrictedCannotShipGroundComponent,
    RestrictedViaReturnsComponent,
    IncompleteOfferComponent,
    StrandedInFeedComponent,
    StrandedInCatalogComponent,
    DiscontinuedUpdateComponent,
  ],
  imports: [
    CommonModule,
    PerformanceIssuesRoutingModule,
    ComponentModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    ProductModule,
  ],
  exports: [
    HandlingTimeConflictComponent,
    UnitPriceConflictComponent,
    MapConflictComponent,
    RestrictedDiscontinuedComponent,
    RestrictedCannotShipGroundComponent,
    RestrictedViaReturnsComponent,
    IncompleteOfferComponent,
    StrandedInFeedComponent,
    StrandedInCatalogComponent,
    DiscontinuedUpdateComponent,
  ],
})
export class PerformanceIssuesModule {}
