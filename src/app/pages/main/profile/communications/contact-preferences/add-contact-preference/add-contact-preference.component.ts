import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact-preference',
  templateUrl: './add-contact-preference.component.html',
  styleUrls: ['./add-contact-preference.component.scss'],
})
export class AddContactPreferenceComponent implements OnInit {
  @Output() closeModel = new EventEmitter();
  @Input() editData: any = '';
  isLoading: boolean = false;
  addContactPreferencesForm!: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.addContactPreferencesForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      work_phone: new FormControl('', [Validators.required]),
      work_phone_extension: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });

    setTimeout(() => {
      if (this.editData) {
        this.addContactPreferencesForm
          .get('first_name')
          ?.setValue(this.editData?.first_name);
        this.addContactPreferencesForm
          .get('last_name')
          ?.setValue(this.editData?.last_name);
        this.addContactPreferencesForm
          .get('designation')
          ?.setValue(this.editData?.designation);
        this.addContactPreferencesForm
          .get('work_phone')
          ?.setValue(this.editData?.work_phone);
        this.addContactPreferencesForm
          .get('work_phone_extension')
          ?.setValue(this.editData?.work_phone_extension);
        this.addContactPreferencesForm
          .get('mobile')
          ?.setValue(this.editData?.mobile);
        this.addContactPreferencesForm
          .get('email')
          ?.setValue(this.editData?.email);
      }
    }, 100);
  }

  submitForm() {}

  handleCancel() {
    this.closeModel.emit();
  }
}
