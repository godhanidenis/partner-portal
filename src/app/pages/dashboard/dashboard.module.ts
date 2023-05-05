import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { AscFormComponent } from './component/asc-form/asc-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './component/profile/profile.component';
import { HomeComponent } from './component/home/home.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    DashboardComponent,
    AscFormComponent,
    ProfileComponent,
    HomeComponent,
  ],
  imports: [
    DashboardRoutingModule,
    NzLayoutModule,
    CommonModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    NzDividerModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
