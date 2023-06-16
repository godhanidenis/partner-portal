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
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  isLoading: boolean = false;
  passwordShow: boolean = true;
  newPasswordShow: boolean = true;
  changePasswordForm!: FormGroup;
  sameAsPassword: boolean = true;
  submitError: boolean = false;

  constructor(private message: NzMessageService) {}

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  checkPassword() {
    if (
      this.changePasswordForm.controls['newPassword'].value ===
      this.changePasswordForm.controls['confirmPassword'].value
    ) {
      this.sameAsPassword = true;
    } else {
      this.sameAsPassword = false;
    }
  }

  submitForm(): void {
    this.submitError = true;
    if (this.changePasswordForm.valid) {
    }
  }
}
