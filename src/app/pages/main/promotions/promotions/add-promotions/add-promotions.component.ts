import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-promotions',
  templateUrl: './add-promotions.component.html',
  styleUrls: ['./add-promotions.component.scss'],
})
export class AddPromotionsComponent implements OnInit {
  @Output() close = new EventEmitter();
  add_promotion!: FormGroup;
  isLoading: boolean = false;

  constructor() {}
  ngOnInit(): void {
    this.add_promotion = new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      downloadTemplate: new FormControl(''),
      uploadFile: new FormControl(''),
    });
  }

  submit() {}

  handleCancel() {
    this.close.emit();
  }
}
