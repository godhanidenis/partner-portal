import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { find, get, pull } from 'lodash';

@Component({
  selector: 'app-invoice-payment-status',
  templateUrl: './invoice-payment-status.component.html',
  styleUrls: ['./invoice-payment-status.component.scss'],
})
export class InvoicePaymentStatusComponent implements OnInit {
  filterForm!: FormGroup;
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];

  invoicePaymentStatusList = [
    {
      id: 1,
      invoiceNo: 'UAL-REM-45',
      invoiceDate: '4/21/23',
      invoiceAmount: '450.00',
      poNumber: 'PO-4561',
      paymentDueDate: '4/23/23',
      chargebackAmount: '20.00',
      toBePaidAmount: '430.00',
      remarks: 'Will be paid on due date',
    },
    {
      id: 2,
      invoiceNo: 'UAL-REM-44',
      invoiceDate: '4/21/23',
      invoiceAmount: '450.00',
      poNumber: 'PO-4560',
      paymentDueDate: '4/23/23',
      chargebackAmount: '20.00',
      toBePaidAmount: '430.00',
      remarks: 'Will be paid on due date',
    },
    {
      id: 3,
      invoiceNo: 'UAL-REM-43',
      invoiceDate: '4/21/23',
      invoiceAmount: '450.00',
      poNumber: 'PO-4559',
      paymentDueDate: '4/23/23',
      chargebackAmount: '20.00',
      toBePaidAmount: '430.00',
      remarks: 'Will be paid on due date',
    },
  ];
  tagInputRef!: ElementRef;
  tags: string[] = [];

  constructor() {}
  ngOnInit(): void {
    this.filterForm = new FormGroup({
      filter: new FormControl(''),
    });
  }

  focusTagInput(): void {
    // this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.filterForm.controls['filter'].value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (
        event.code === 'Comma' ||
        event.code === 'Space' ||
        event.code === 'Enter'
      ) {
        this.addTag(inputValue);
        this.filterForm.controls['filter'].setValue('');
      }
    }
  }
  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.tags, tag)) {
      this.tags.push(tag);
    }
  }
  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.tags, tag);
    } else {
      this.tags.splice(-1);
    }
  }
}
