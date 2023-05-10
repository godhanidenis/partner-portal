import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-po-label-and-invoice-preferences',
  templateUrl: './po-label-and-invoice-preferences.component.html',
  styleUrls: ['./po-label-and-invoice-preferences.component.scss'],
})
export class PoLabelAndInvoicePreferencesComponent implements OnInit {
  poForm!: FormGroup;
  labelForm!: FormGroup;
  invoiceForm!: FormGroup;
  showEmailSection: boolean = false;
  showLabelSection: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.poForm = this.fb.group({
      poMethod: 'edi',
      authorizeSender: this.fb.array([]),
    });
    this.labelForm = new FormGroup({
      prepaidLabel: new FormControl('no'),
      size: new FormControl(''),
      formate: new FormControl(''),
    });
    this.invoiceForm = this.fb.group({
      emailList: this.fb.array([]),
    });
    this.addAuthorizeSender();
    this.addEmails();
  }

  get authorizeSender(): FormArray {
    return this.poForm.controls['authorizeSender'] as FormArray;
  }
  get emailList(): FormArray {
    return this.invoiceForm.controls['emailList'] as FormArray;
  }

  newAuthorizeSender(): FormGroup {
    return this.fb.group({
      email: '',
    });
  }
  newEmail(): FormGroup {
    return this.fb.group({
      emails: '',
    });
  }

  addAuthorizeSender() {
    this.authorizeSender.push(this.newAuthorizeSender());
  }
  addEmails() {
    this.emailList.push(this.newEmail());
  }

  removeAuthorizeSender(i: number) {
    this.authorizeSender.removeAt(i);
  }
  removeEmail(i: number) {
    this.emailList.removeAt(i);
  }

  selectPoMethod(event: string) {
    if (event === 'email') {
      this.showEmailSection = true;
    } else {
      this.showEmailSection = false;
    }
  }

  selectPrepaidLabel(event: string) {
    if (event === 'yes') {
      this.showLabelSection = true;
    } else {
      this.showLabelSection = false;
    }
  }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
