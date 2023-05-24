import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSectionComponent } from './home-section/home-section.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HandlingTimeConflictComponent } from './home-section/handling-time-conflict/handling-time-conflict.component';

@NgModule({
  declarations: [HomeSectionComponent, HandlingTimeConflictComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HomeModule {}
