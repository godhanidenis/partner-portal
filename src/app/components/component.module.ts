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

@NgModule({
  declarations: [
    StatusBadgeComponent,
    ThreeDotMenuBtnComponent,
    DateRangeComponent,
    FilterTagComponent,
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
  ],
})
export class ComponentModule {}
