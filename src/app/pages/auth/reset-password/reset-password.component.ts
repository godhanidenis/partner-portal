import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  isLoading: boolean = false;
  passwordShow: boolean = true;
  newPasswordShow: boolean = true;
  resetForm!: FormGroup;
  token: string = '';
  sameAsPassword: boolean = true;
  submitError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.token = this.activatedRoute.snapshot.paramMap.get('token') ?? '';
  }

  ngOnInit(): void {
    this.resetForm = new FormGroup({
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  checkPassword() {
    if (
      this.resetForm.controls['newPassword'].value ===
      this.resetForm.controls['confirmPassword'].value
    ) {
      this.sameAsPassword = true;
    } else {
      this.sameAsPassword = false;
    }
  }

  submitForm(): void {
    this.submitError = true;
    if (this.resetForm.valid) {
    }
  }
}
