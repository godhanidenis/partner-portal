import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { ListNgZorroModule } from 'src/app/shared/list-ng-zorro/list-ng-zorro.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogFeedRoutingModule } from './catalog-feed-routing.module';
import { CatalogrefernacesComponent } from './catalog-prefernaces/catalog-prefernaces.component';
import { FeedPrefernacesComponent } from './feed-prefernaces/feed-prefernaces.component';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  declarations: [CatalogrefernacesComponent, FeedPrefernacesComponent],
  imports: [
    CatalogFeedRoutingModule,
    NzLayoutModule,
    CommonModule,
    ListNgZorroModule,
    NzMenuModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
  ],
  exports: [],
})
export class CatalogFeedModule {}
