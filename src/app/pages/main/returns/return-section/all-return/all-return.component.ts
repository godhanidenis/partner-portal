import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-return',
  templateUrl: './all-return.component.html',
  styleUrls: ['./all-return.component.scss'],
})
export class AllReturnComponent implements OnInit {
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
      status: 'Refund Completed',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
