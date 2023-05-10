import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllowancesRoutingModule } from './allowances-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RebateComponent } from './rebate/rebate.component';
import { CoOpComponent } from './co-op/co-op.component';

@NgModule({
  declarations: [
    RebateComponent,
    CoOpComponent
  ],
  imports: [
    CommonModule,
    AllowancesRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AllowancesModule {}
