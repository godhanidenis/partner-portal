import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';

const routes: Routes = [
  { path: '', component: HomeSectionComponent },
  {
    path: 'performance-issues',
    loadChildren: () =>
      import(
        '../home/home-section/performance-issues/performance-issues.module'
      ).then((m) => m.PerformanceIssuesModule),
  },
  {
    path: 'recommendation-issues',
    loadChildren: () =>
      import(
        './home-section/recommendation-issues/recommendation-issues.module'
      ).then((m) => m.RecommendationIssuesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
