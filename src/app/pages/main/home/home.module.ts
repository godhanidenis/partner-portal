import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSectionComponent } from './home-section/home-section.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from 'src/app/components/component.module';
import { ProductModule } from '../product/product.module';
import { PerformanceIssuesModule } from './home-section/performance-issues/performance-issues.module';
import { RecommendationIssuesModule } from './home-section/recommendation-issues/recommendation-issues.module';

@NgModule({
  declarations: [HomeSectionComponent],
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
    PerformanceIssuesModule,
    RecommendationIssuesModule,
  ],
})
export class HomeModule {}
