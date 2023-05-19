import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  returnInitiatedList = [
    {
      id: 1,
      po: 'NOU-183',
      invoice: '2 - 8528363',
      customerName: 'maynard j megginson jr',
      mpn: '99446823823',
      orderQty: 'Order Qty - 1',
      returnQty: 'Return Qty - 1',
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
}
