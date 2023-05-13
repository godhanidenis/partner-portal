import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ach-verification',
  templateUrl: './ach-verification.component.html',
  styleUrls: ['./ach-verification.component.scss'],
})
export class AchVerificationComponent implements OnInit {
  ascVerificationForm!: FormGroup;
  reTypeAccountNumber: boolean = false;
  breadcrumb: any;

  achVerificationData = {
    deposit_value_one: '11.11',
    deposit_value_two: '22.22',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.ascVerificationForm = new FormGroup({
      deposit_value_one: new FormControl(
        this.achVerificationData?.deposit_value_one,
        [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')]
      ),
      deposit_value_two: new FormControl(
        this.achVerificationData?.deposit_value_two,
        [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')]
      ),
    });
  }

  submitForm() {
    console.log(this.ascVerificationForm.value);
  }
}
