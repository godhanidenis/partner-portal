import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSectionComponent } from './home-section/home-section.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HandlingTimeConflictComponent } from './home-section/handling-time-conflict/handling-time-conflict.component';
import { ComponentModule } from 'src/app/components/component.module';
import { UnitPriceConflictComponent } from './home-section/unit-price-conflict/unit-price-conflict.component';
import { MapConflictComponent } from './home-section/map-conflict/map-conflict.component';
import { RestrictedDiscontinuedComponent } from './home-section/restricted-discontinued/restricted-discontinued.component';
import { RestrictedCannotShipGroundComponent } from './home-section/restricted-cannot-ship-ground/restricted-cannot-ship-ground.component';
import { RestrictedViaReturnsComponent } from './home-section/restricted-via-returns/restricted-via-returns.component';
import { IncompleteOfferComponent } from './home-section/incomplete-offer/incomplete-offer.component';
import { StrandedInFeedComponent } from './home-section/stranded-in-feed/stranded-in-feed.component';
import { StrandedInCatalogComponent } from './home-section/stranded-in-catalog/stranded-in-catalog.component';
import { DiscontinuedUpdateComponent } from './home-section/discontinued-update/discontinued-update.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    HomeSectionComponent,
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
    HomeRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
    ProductModule,
  ],
})
export class HomeModule {}
