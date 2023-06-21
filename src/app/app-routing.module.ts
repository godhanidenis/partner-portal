import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { authGuard } from './shared/guard/auth.guard';
import { logoutGuard } from './shared/guard/logout.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login',
    // main/dashboard
  },
  {
    path: 'auth',
    canActivate: [logoutGuard],
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./pages/auth/auth.module').then((modules) => modules.AuthModule),
  },
  {
    path: 'main',
    canActivate: [authGuard],
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
