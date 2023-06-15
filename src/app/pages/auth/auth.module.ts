import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListNgZorroModule } from '../../shared/list-ng-zorro/list-ng-zorro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [SignInComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ListNgZorroModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
