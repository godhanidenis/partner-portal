import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  forgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }

  submitForm(): void {
    this.submitError = true;
  }
}
