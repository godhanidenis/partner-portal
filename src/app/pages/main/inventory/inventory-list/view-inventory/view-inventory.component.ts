import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss'],
})
export class ViewInventoryComponent implements OnInit {
  editData = {
    feedCode: 'ASL-FEED-PROCESS-001',
    time: '5/12/2023 8:09 PM',
    method: 'Email',
  };
  inStockProduct = [
    {
      id: 1,
      name: '"Out of Stock" products that have now come back "In ',
      count: '14',
    },
    {
      id: 2,
      name: '"In Stock" products that continue to remain "In Stock"',
      count: '1315',
    },
    {
      id: 3,
      name: 'Partner Discontinued - In Stock',
      count: '0',
    },
    {
      id: 4,
      name: 'Partner Restricted - In Stock',
      count: '293',
    },
    {
      id: 5,
      name: '123Stores Restricted - In Stock',
      count: '249',
    },
    {
      id: 6,
      name: 'LTL - In StocK',
      count: '245',
    },
  ];

  outOfStockProduct = [
    {
      id: 1,
      name: '"In Stock" products that have gone "Out of Stock"',
      count: ' 0',
    },
    {
      id: 2,
      name: '"Out of Stock" products that continue to remain "Out of',
      count: '  56',
    },
    {
      id: 3,
      name: 'Partner Discontinued - Out of Stock',
      count: ' 0',
    },
    {
      id: 4,
      name: 'Partner Restricted - Out of Stock',
      count: ' 0',
    },
    {
      id: 5,
      name: '123Stores Restricted - Out of Stock',
      count: ' 89',
    },
    {
      id: 6,
      name: 'LTL - Out of Stock',
      count: ' 20',
    },
    {
      id: 7,
      name: 'Stranded (In Catalog)',
      count: ' 0',
    },
    {
      id: 8,
      name: 'Stranded (In-Feed)',
      count: '',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
