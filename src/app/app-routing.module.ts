import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main/dashboard',
  },
  {
    path: 'auth',
    // canActivate: [LogoutGuard],
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./pages/auth/auth.module').then((modules) => modules.AuthModule),
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
