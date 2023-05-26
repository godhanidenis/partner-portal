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
  showEmailSection: boolean = false;
  showLabelSection: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.poForm = this.fb.group({
      poMethod: 'edi',
      prepaidLabel: new FormControl('no'),
      size: new FormControl(''),
      formate: new FormControl(''),
      emailList: this.fb.array([]),
    });
    this.addEmails();
  }

  get emailList(): FormArray {
    return this.poForm.controls['emailList'] as FormArray;
  }

  newEmail(): FormGroup {
    return this.fb.group({
      emails: '',
    });
  }

  addEmails() {
    this.emailList.push(this.newEmail());
  }

  removeEmail(i: number) {
    this.emailList.removeAt(i);
  }

  selectPrepaidLabel(event: string) {
    if (event === 'yes') {
      this.showLabelSection = true;
    } else {
      this.showLabelSection = false;
    }
  }
}
