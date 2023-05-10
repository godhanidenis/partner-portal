import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PaymentsModule } from './payments/payments.module';
import { OrderProcessingModule } from './order-processing/order-processing.module';
import { CompanyModule } from './company/company.module';
import { AllowancesModule } from './allowances/allowances.module';
import { ReturnModule } from './return/return.module';
import { CatalogFeedModule } from './catalog-feed/catalog-feed.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ProfileRoutingModule,
    NzLayoutModule,
    CommonModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    PaymentsModule,
    OrderProcessingModule,
    CompanyModule,
    AllowancesModule,
    ReturnModule,
    CatalogFeedModule,
  ],
  exports: [],
})
export class ProfileModule {}
