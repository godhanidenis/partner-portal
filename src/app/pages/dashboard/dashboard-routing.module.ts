import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AscFormComponent } from './component/asc-form/asc-form.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  { path: 'profile/asc-form', component: AscFormComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
