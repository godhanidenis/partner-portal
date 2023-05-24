import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';
import { HandlingTimeConflictComponent } from './home-section/handling-time-conflict/handling-time-conflict.component';

const routes: Routes = [
  { path: '', component: HomeSectionComponent },
  {
    path: 'handling-time-conflict',
    component: HandlingTimeConflictComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
