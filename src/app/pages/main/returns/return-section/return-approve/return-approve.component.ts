import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-return-approve',
  templateUrl: './return-approve.component.html',
  styleUrls: ['./return-approve.component.scss'],
})
export class ReturnApproveComponent implements OnInit {
  @Output() closeModal = new EventEmitter();
  @Output() submitModal = new EventEmitter();
  approveCreditForm!: FormGroup;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.approveCreditForm = new FormGroup({
      creditValue: new FormControl('00.00'),
      cn: new FormControl('', [Validators.required]),
      uploadCreditNote: new FormControl(''),
    });
  }

  close() {
    this.closeModal.emit();
  }

  submitForm() {
    this.submitModal.emit();
  }
}
