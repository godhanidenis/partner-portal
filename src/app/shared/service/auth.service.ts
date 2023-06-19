import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ChangePassword,
  ChangePasswordToken,
  ForgotPasswordReq,
  LoginReq,
  RefreshToken,
  ResetPasswordReq,
} from '../model/auth.model';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.baseUrl;
  constructor(private httpClient: HttpClient, private router: Router) {}

  login(payload: LoginReq) {
    return this.httpClient.post(this.url + '/login', payload);
  }

  setAccessToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  resetPassword(payload: ResetPasswordReq) {
    return this.httpClient.post(
      this.url + '/reset-password-first-time',
      payload
    );
  }

  forgotPassword(payload: ForgotPasswordReq) {
    return this.httpClient.post(this.url + '/forgot-password', payload);
  }

  changePasswordToken(payload: ChangePasswordToken) {
    return this.httpClient.post(this.url + '/change-password-token', payload);
  }

  changePassword(payload: ChangePassword) {
    return this.httpClient.post(this.url + '/change-password', payload);
  }

  refreshToken(payload: RefreshToken) {
    return this.httpClient.post(this.url + '/refresh-token', payload);
  }

  logOutUser() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
