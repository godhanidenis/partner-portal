import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeSectionComponent } from './home-section/home-section.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from 'src/app/components/component.module';
import { PerformanceIssuesModule } from './home-section/performance-issues/performance-issues.module';
import { RecommendationIssuesModule } from './home-section/recommendation-issues/recommendation-issues.module';
import { SalesReportComponent } from './home-section/sales-report/sales-report.component';

@NgModule({
  declarations: [HomeSectionComponent, SalesReportComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
    PerformanceIssuesModule,
    RecommendationIssuesModule,
  ],
})
export class HomeModule {}
