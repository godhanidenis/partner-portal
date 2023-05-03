import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: '', pathMatch: 'full', redirectTo: '/sidebar' },
  { path: 'welcome', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
