import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { W9SetupComponent } from './w9-setup/w9-setup.component';
import { CertiOfInsuComponent } from './certi-of-insurance/certi-of-insurance.component';


@NgModule({
  declarations: [CompanyProfileComponent, W9SetupComponent, CertiOfInsuComponent ],
  imports: [
    CompanyRoutingModule,
    NzLayoutModule,
    CommonModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
})
export class CompanyModule {}
