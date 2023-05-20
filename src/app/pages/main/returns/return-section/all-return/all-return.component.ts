import { Component, OnInit } from '@angular/core';
import { StatusEnum } from 'src/app/components/status-badge/status-badge.component';

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
  statusEnum: typeof StatusEnum = StatusEnum;

  returnInitiatedList = [
    {
      id: 1,
      po: 'NOU-183',
      invoice: '2 - 8528363',
      customerName: 'maynard j megginson jr',
      returnClassification: 'Mis-Ship',
      mpn: '99446823823',
      orderQty: '1',
      returnQty: '1',
      raNumber: [
        {
          name: 'AMZ',
          number: '82382',
        },
        {
          name: 'Your',
          number: '82384',
        },
      ],
      trackingNo: {
        name: 'Ekart Logistics',
        number: 'SRTP5737737138',
      },
      status: 'Refund Completed',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
