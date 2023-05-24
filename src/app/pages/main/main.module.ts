import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';

import { ProfileModule } from './profile/profile.module';
import { ProductModule } from './product/product.module';
import { ComponentModule } from 'src/app/components/component.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    MainRoutingModule,
    NzLayoutModule,
    CommonModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileModule,
    ProductModule,
    ComponentModule,
    HomeModule,
  ],
  exports: [],
})
export class MainModule {}
