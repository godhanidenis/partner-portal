import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduled-promotions',
  templateUrl: './scheduled-promotions.component.html',
  styleUrls: ['./scheduled-promotions.component.scss'],
})
export class ScheduledPromotionsComponent implements OnInit {
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];

  scheduledPromotionsList = [
    {
      id: 1,
      promoCode: 'SLL-SPECIAL-PRICE-MAP-PROMO-38',
      addedOn: '4/15/23',
      startDate: '5/1/23',
      endDate: '5/16/23',
      promotionType: 'Create Price only Promo',
      sku: 'ALL',
      count: '114',
      promotionAvg: '7',
      status: 'Schedule',
    },
  ];

  constructor() {}
  ngOnInit(): void {}
}
