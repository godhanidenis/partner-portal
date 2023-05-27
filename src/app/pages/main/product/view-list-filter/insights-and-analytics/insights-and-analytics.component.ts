import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insights-and-analytics',
  templateUrl: './insights-and-analytics.component.html',
  styleUrls: ['./insights-and-analytics.component.scss'],
})
export class InsightsAndAnalyticsComponent implements OnInit {
  repricingInsightList = [
    {
      name: 'Strategy Name',
      value: 'Sold-SKUs-Set-1',
    },
    {
      name: 'Change Type',
      value: 'Competition Below min',
    },
    {
      name: 'Change Amount',
      value: 'UseMinPrice',
    },
    {
      name: 'MarketPlace',
      value: 'Amazon',
    },
    {
      name: 'Min Price',
      value: 203.02,
    },
    {
      name: 'Max Price',
      value: 352.03,
    },
    {
      name: 'Map Price',
      value: 102.01,
    },
    {
      name: 'Shipping',
      value: 0.0,
    },
    {
      name: 'Batch Id',
      value: 654231456123,
    },
  ];

  competitionInsightList = [
    {
      name: 'seller',
      value: 197.03,
    },
    {
      name: 'Price',
      value: 0.0,
    },
    {
      name: 'Fulfillment Type',
      value: 'FBA',
    },
    {
      name: 'Seller Rating',
      value: 91,
    },
    {
      name: 'Feature Seller',
      value: 'Yes',
    },
    {
      name: 'Bye Box',
      value: '',
    },
  ];
  ngOnInit(): void {}
}
