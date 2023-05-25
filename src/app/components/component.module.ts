import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from '../shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusBadgeComponent } from './status-badge/status-badge.component';
import { ThreeDotMenuBtnComponent } from './three-dot-menu-btn/three-dot-menu-btn.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { FilterTagComponent } from './filter-tag/filter-tag.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { HomeFilterActionComponent } from './dashboard/home-filter-action/home-filter-action.component';
import { HomeFilterTagComponent } from './dashboard/home-filter-tag/home-filter-tag.component';
import { HomeFilterSectionComponent } from './dashboard/home-filter-section/home-filter-section.component';

@NgModule({
  declarations: [
    StatusBadgeComponent,
    ThreeDotMenuBtnComponent,
    DateRangeComponent,
    FilterTagComponent,
    FilterSectionComponent,
    HomeFilterActionComponent,
    HomeFilterTagComponent,
    HomeFilterSectionComponent,
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    StatusBadgeComponent,
    ThreeDotMenuBtnComponent,
    DateRangeComponent,
    FilterTagComponent,
    FilterSectionComponent,
    HomeFilterActionComponent,
    HomeFilterTagComponent,
    HomeFilterSectionComponent,
  ],
})
export class ComponentModule {}
