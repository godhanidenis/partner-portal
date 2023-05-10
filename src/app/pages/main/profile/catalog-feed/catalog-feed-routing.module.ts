import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedPrefernacesComponent } from './feed-prefernaces/feed-prefernaces.component';
import { CatalogrefernacesComponent } from './catalog-prefernaces/catalog-prefernaces.component';


const routes: Routes = [{ path: 'catalog-preferences', component: CatalogrefernacesComponent },
                        { path: 'feed-preferences', component: FeedPrefernacesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogFeedRoutingModule {}
