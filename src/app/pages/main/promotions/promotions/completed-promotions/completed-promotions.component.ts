import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-promotions',
  templateUrl: './completed-promotions.component.html',
  styleUrls: ['./completed-promotions.component.scss'],
})
export class CompletedPromotionsComponent implements OnInit {
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];

  completedPromotionsList = [
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
      status: 'Canceled',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
