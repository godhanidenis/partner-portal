import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remittance',
  templateUrl: './remittance.component.html',
  styleUrls: ['./remittance.component.scss'],
})
export class RemittanceComponent implements OnInit {
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];

  remittanceList = [
    {
      id: 1,
      remittanceCode: 'UAL-REM-45',
      date: '4/21/23',
      totalNo: '2',
      invoiceAmount: '450.00',
      creditAmount: '20.00',
      remittanceAmount: '430.00',
    },
    {
      id: 2,
      remittanceCode: 'UAL-REM-44',
      date: '4/22/23',
      totalNo: '1',
      invoiceAmount: '450.00',
      creditAmount: '20.00',
      remittanceAmount: '430.00',
    },
    {
      id: 3,
      remittanceCode: 'UAL-REM-43',
      date: '4/23/23',
      totalNo: '2',
      invoiceAmount: '450.00',
      creditAmount: '20.00',
      remittanceAmount: '430.00',
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
