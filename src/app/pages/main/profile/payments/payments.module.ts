import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentsRoutingModule } from './payments-routing.module';
import { AchSetUpComponent } from './ach-set-up/ach-set-up.component';
import { AchVerificationComponent } from './ach-verification/ach-verification.component';
import { AchSectionComponent } from './ach-section/ach-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  declarations: [
    AchSetUpComponent,
    AchVerificationComponent,
    AchSectionComponent,
  ],
  imports: [
    PaymentsRoutingModule,
    NzLayoutModule,
    CommonModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ComponentModule,
  ],
  exports: [],
})
export class PaymentsModule {}
