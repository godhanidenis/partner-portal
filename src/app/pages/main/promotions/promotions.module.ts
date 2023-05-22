import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionsRoutingModule } from './promotions-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThreeDotMenuBtnModule } from 'src/app/components/three-dot-menu-btn/three-dot-menu-btn.module';
import { StatusBadgeModule } from 'src/app/components/status-badge/status-badge.module';
import { ScheduledPromotionsComponent } from './promotions/scheduled-promotions/scheduled-promotions.component';
import { CompletedPromotionsComponent } from './promotions/completed-promotions/completed-promotions.component';

@NgModule({
  declarations: [PromotionsComponent, ScheduledPromotionsComponent, CompletedPromotionsComponent],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    ThreeDotMenuBtnModule,
    StatusBadgeModule,
  ],
})
export class PromotionsModule {}
