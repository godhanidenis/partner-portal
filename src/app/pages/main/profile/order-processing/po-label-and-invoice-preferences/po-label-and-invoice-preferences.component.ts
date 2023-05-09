import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-po-label-and-invoice-preferences',
  templateUrl: './po-label-and-invoice-preferences.component.html',
  styleUrls: ['./po-label-and-invoice-preferences.component.scss'],
})
export class PoLabelAndInvoicePreferencesComponent implements OnInit {
  poAndInvoiceForm!: FormGroup;
  labelForm!: FormGroup;
  showEmailSection: boolean = false;
  showLabelSection: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.poAndInvoiceForm = this.fb.group({
      poMethod: 'edi',
      emailList: this.fb.array([]),
    });
    this.labelForm = new FormGroup({
      prepaidLabel: new FormControl('no'),
      size: new FormControl(''),
      formate: new FormControl(''),
    });
    this.addEmails();
  }

  get emailList(): FormArray {
    return this.poAndInvoiceForm.controls['emailList'] as FormArray;
  }

  newEmail(): FormGroup {
    return this.fb.group({
      email: '',
    });
  }

  addEmails() {
    this.emailList.push(this.newEmail());
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
