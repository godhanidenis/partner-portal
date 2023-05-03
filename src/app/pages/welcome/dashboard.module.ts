import { NgModule } from '@angular/core';

import {DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [DashboardRoutingModule,
           NzLayoutModule,
           CommonModule,
           ListNgZorroModule,
           NzMenuModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
