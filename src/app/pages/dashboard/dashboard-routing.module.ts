import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent , children: [
    { path: 'profile', component: ProfileComponent, pathMatch: 'full' }]
  },
  


  
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }