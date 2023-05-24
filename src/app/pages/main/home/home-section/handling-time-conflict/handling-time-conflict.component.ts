import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-handling-time-conflict',
  templateUrl: './handling-time-conflict.component.html',
  styleUrls: ['./handling-time-conflict.component.scss'],
})
export class HandlingTimeConflictComponent implements OnInit {
  addAddressVisible: boolean = false;
  editAddressVisible: boolean = false;
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];

  uploadModelVisible: boolean = false;

  returnLocationList = [
    {
      id: 1,
      mpn: 'SLLD006A',
      upc: '789313418718',
      product_Name: '6 OZ LADDON PLASTIC I PC HANDLE, BLACK',
      amazonASIN: 'B0002LI630',
      partnerHandlingTimeProvided: '5',
      conflictingHandlingTime: '2',
      noOfConflictingProviders: '1',
      conflictingProviders: 'McDonald Paper Restaurant Supplies',
    },
    {
      id: 2,
      mpn: 'STPA3144',
      upc: '789313308415',
      product_Name: 'QUARTER SIZE 4 DEEP 24 GAUGE ANTI JAM PANS',
      amazonASIN: 'B000KI7SM0',
      partnerHandlingTimeProvided: '3',
      conflictingHandlingTime: '1',
      noOfConflictingProviders: '1',
      conflictingProviders: 'MVTRADINGONLINE(USA)',
    },
    {
      id: 3,
      mpn: 'SLSS009',
      upc: '789313286010',
      product_Name: 'SEA SHELL DINNER KNIFE',
      amazonASIN: 'B000KI8DQA',
      partnerHandlingTimeProvided: '3',
      conflictingHandlingTime: '2',
      noOfConflictingProviders: '1',
      conflictingProviders: 'AI1OVA136FLJU',
    },
    {
      id: 4,
      mpn: 'ALPMA012',
      upc: '789313157310',
      product_Name: 'SLICE PIE MAKER, 12 CUT',
      amazonASIN: 'B000KIAJQW',
      partnerHandlingTimeProvided: '3',
      conflictingHandlingTime: '1',
      noOfConflictingProviders: '2',
      conflictingProviders: 'MVTRADINGONLINE(USA),9Grace',
    },
    {
      id: 5,
      mpn: 'ALTWSC024',
      upc: '789313171910',
      product_Name: '24 OZ ALUMINUM SCOOP',
      amazonASIN: 'B000KIDRP2',
      partnerHandlingTimeProvided: '3',
      conflictingHandlingTime: '1',
      noOfConflictingProviders: '2',
      conflictingProviders: 'MVTRADINGONLINE(USA),9Grace',
    },
  ];
  editData: any;
  modelHeader: string = 'Add';
  primaryContact: number = 1;
  viewData: any;
  viewAddressVisible: boolean = false;

  constructor(private router: Router, private modal: NzModalService) {}
  ngOnInit(): void {}

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
