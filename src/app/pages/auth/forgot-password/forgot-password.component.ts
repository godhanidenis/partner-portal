import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  isLoading: boolean = false;
  newPasswordShow: boolean = true;
  passwordShow: boolean = true;
  forgotForm!: FormGroup;

  constructor(private router: Router, private message: NzMessageService) {}

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      email: new FormControl(''),
    });
  }

  logIn() {
    this.router.navigate(['/auth/login']);
  }

  submitForm(): void {}
}
