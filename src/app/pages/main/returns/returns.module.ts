import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnsRoutingModule } from './returns-routing.module';
import { ReturnSectionComponent } from './return-section/return-section.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReturnInitiatedComponent } from './return-section/return-initiated/return-initiated.component';
import { ReturnInTransitComponent } from './return-section/return-in-transit/return-in-transit.component';
import { ReturnReceivedComponent } from './return-section/return-received/return-received.component';
import { InCarrierClaimsComponent } from './return-section/in-carrier-claims/in-carrier-claims.component';
import { AllReturnComponent } from './return-section/all-return/all-return.component';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  declarations: [
    ReturnSectionComponent,
    ReturnInitiatedComponent,
    ReturnInTransitComponent,
    ReturnReceivedComponent,
    InCarrierClaimsComponent,
    AllReturnComponent,
  ],
  imports: [
    CommonModule,
    ReturnsRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
  ],
})
export class ReturnsModule {}
