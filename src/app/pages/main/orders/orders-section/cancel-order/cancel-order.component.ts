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

  constructor() {}

  ngOnInit(): void {
    this.cancelOrderForm = new FormGroup({
      option: new FormControl(''),
    });
  }

  handleCancel() {
    this.closeModel.emit();
  }
}
