import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LoginReq, LoginRes } from 'src/app/shared/model/auth.model';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading: boolean = false;
  passwordShow: boolean = true;
  submitError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  forgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  submitForm(): void {
    this.submitError = true;
    if (this.loginForm.valid) {
      this.isLoading = true;
      const dataReq: LoginReq = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value,
      };
      this.authService.login(dataReq).subscribe(
        (result: any) => {
          console.log(result);
          this.isLoading = false;
          if (result.success) {
            this.message.success('User login successfully!!');

            this.authService.setAccessToken(result.access_token);
            this.authService.setRefreshToken(result.refresh_token);
            this.authService.saveUser(result.user_profile);
            this.router.navigate(['/main/dashboard']);
          }
        },
        (err) => (this.isLoading = false)
      );
    }
  }
}
