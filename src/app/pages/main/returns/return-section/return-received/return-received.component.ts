import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-return-received',
  templateUrl: './return-received.component.html',
  styleUrls: ['./return-received.component.scss'],
})
export class ReturnReceivedComponent implements OnInit {
  approveCreditForm!: FormGroup;
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];
  modelVisible: boolean = false;

  returnReceivedList = [
    {
      id: 1,
      po: 'NOU-183',
      invoice: '2 - 8528363',
      customerName: 'maynard j megginson jr',
      returnClassification: 'Mis-Ship',
      mpn: '99446823823',
      orderQty: 'Order Qty - 1',
      returnQty: 'Return Qty - 1',
      raNumber: [
        {
          name: 'AMZ',
          number: 'RA#:82382',
        },
        {
          name: 'Your',
          number: 'RA#:82384',
        },
      ],
      trackingNo: {
        name: 'Ekart Logistics',
        number: 'AWB:SRTP5737737138',
      },
    },
  ];

  constructor() {}
  ngOnInit(): void {
    this.approveCreditForm = new FormGroup({
      creditValue: new FormControl('00.00'),
      cn: new FormControl('', [Validators.required]),
      uploadCreditNote: new FormControl(''),
    });
  }

  submitForm() {}
}
