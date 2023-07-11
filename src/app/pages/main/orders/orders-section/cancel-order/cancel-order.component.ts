import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.scss'],
})
export class CancelOrderComponent implements OnInit {
  @Output() closeModel = new EventEmitter();
  cancelOrderForm!: FormGroup;
  isLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.cancelOrderForm = new FormGroup({
      option: new FormControl(''),
      otherOption: new FormControl(''),
    });
  }

  handleCancel() {
    this.closeModel.emit();
  }
}
