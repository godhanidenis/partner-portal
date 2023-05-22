import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { endOfMonth } from 'date-fns';

@Component({
  selector: 'app-return-initiated',
  templateUrl: './return-initiated.component.html',
  styleUrls: ['./return-initiated.component.scss'],
})
export class ReturnInitiatedComponent implements OnInit {
  addRaForm!: FormGroup;
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];
  addRaVisible: boolean = false;
  badgeTotal: number = 0;

  returnInitiatedList = [
    {
      id: 1,
      po: 'NOU-183',
      invoice: '2 - 8528363',
      customerName: 'maynard j megginson jr',
      mpn: '99446823823',
      orderQty: '1',
      returnQty: '1',
      returnClassification: 'Mis-Ship',
    },
  ];

  constructor() {}
  ngOnInit(): void {
    this.addRaForm = new FormGroup({
      raInput: new FormControl(''),
    });
  }

  submitForm() {}

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }
}
