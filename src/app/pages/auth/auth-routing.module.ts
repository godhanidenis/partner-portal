import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MasterSignInComponent } from './master-sign-in/master-sign-in.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'master-login',
    component: MasterSignInComponent,
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent,
  },
  // {
  //   path: 'forgot-password/:token',
  //   component: ResetPasswordComponent,
  // },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
