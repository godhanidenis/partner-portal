import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionsRoutingModule } from './promotions-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduledPromotionsComponent } from './promotions/scheduled-promotions/scheduled-promotions.component';
import { CompletedPromotionsComponent } from './promotions/completed-promotions/completed-promotions.component';
import { ComponentModule } from 'src/app/components/component.module';
import { PromotionTableComponent } from './promotions/promotion-table/promotion-table.component';
import { AddPromotionsComponent } from './promotions/add-promotions/add-promotions.component';
import { PromotionDetailsComponent } from './promotions/promotion-details/promotion-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PromotionsComponent,
    ScheduledPromotionsComponent,
    CompletedPromotionsComponent,
    PromotionTableComponent,
    AddPromotionsComponent,
    PromotionDetailsComponent,
  ],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    NzLayoutModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
    SharedModule,
  ],
})
export class PromotionsModule {}
