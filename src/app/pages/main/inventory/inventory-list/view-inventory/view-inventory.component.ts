import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  InventoryFeed,
  InventoryService,
} from 'src/app/shared/service/inventory.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss'],
})
export class ViewInventoryComponent implements OnInit {
  editData: any = '';

  inventoryFeedUpdate = [
    {
      id: 1,
      name: '"Out of Stock" products that have now come back "In Stock". (XXX)',
      in_stock: 0,
      out_stock: 0,
      total: 0,
    },
    {
      id: 2,
      name: '"In Stock" products that continue to remain "In Stock". (XXX)',
      in_stock: 0,
      out_stock: 0,
      total: 0,
    },
    {
      id: 3,
      name: '"In Stock" products that have gone "Out of Stock". (XXX)',
      in_stock: 0,
      out_stock: 0,
      total: 0,
    },
    {
      id: 4,
      name: '"Out of Stock" products that continue to remain "Out of Stock. (XXX)',
      in_stock: 0,
      out_stock: 0,
      total: 0,
    },
    {
      id: 5,
      name: 'Partner Discontinued',
      in_stock: 0,
      out_stock: 0,
      total: 0,
    },
    {
      id: 6,
      name: 'Partner Restricted',
      in_stock: 0,
      out_stock: 0,
      total: 0,
    },
    {
      id: 7,
      name: 'LTL',
      in_stock: 0,
      out_stock: 0,
      total: 0,
    },
    {
      id: 8,
      name: 'Stranded (In-Feed)',
      in_stock: 0,
      out_stock: 0,
      total: 0,
    },
    {
      id: 9,
      name: 'Stranded (In Catalog)',
      in_stock: 0,
      out_stock: 0,
      total: 0,
    },
  ];

  feedCode: string = '';
  isLoading: boolean = true;
  totalInStock: number = 0;
  totalOutStock: number = 0;
  total: number = 0;
  feedResult: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    this.feedCode = this.activatedRoute.snapshot.paramMap.get('feedCode') ?? '';
    this.feedResult =
      this.activatedRoute.snapshot.paramMap.get('feedResult') ?? '';
    const data: InventoryFeed = {
      partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
      user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
      feed_code: this.feedCode,
    };
    if (this.feedResult.toLocaleLowerCase() === 'processed') {
      this.inventoryService.inventoryFeed(data).subscribe(
        (res: any) => {
          this.isLoading = false;
          this.editData = res;
          console.log(res);
          this.editFunction(res);
        },
        (err) => (this.isLoading = false)
      );
    } else {
      this.inventoryService.inventoryFeedReject(data).subscribe(
        (res: any) => {
          this.isLoading = false;
          console.log(res);
          this.editData = res;
        },
        (err) => (this.isLoading = false)
      );
    }
  }

  editFunction(data: any) {
    this.inventoryFeedUpdate[0].in_stock =
      data.in_stock_products?.out_of_stock_products_that_have_come_back_in;
    this.inventoryFeedUpdate[1].in_stock =
      data.in_stock_products?.in_stock_products_that_continue_to_remain_in_stock;
    this.inventoryFeedUpdate[2].out_stock =
      data.out_of_stock_products?.out_of_stock_products_that_continue_to_remain_out_of_stock;
    this.inventoryFeedUpdate[3].out_stock =
      data.out_of_stock_products?.in_stock_products_that_have_gone_out_of_stock;
    this.inventoryFeedUpdate[4].in_stock =
      data.in_stock_products?.partner_discontinued_in_stock;
    this.inventoryFeedUpdate[4].out_stock =
      data.out_of_stock_products?.partner_discontinued_out_of_stock;
    this.inventoryFeedUpdate[5].in_stock =
      data.in_stock_products?.partner_restricted_in_stock;
    this.inventoryFeedUpdate[5].out_stock =
      data.out_of_stock_products?.partner_restricted_out_of_stock;
    this.inventoryFeedUpdate[6].in_stock = data.in_stock_products?.ltl_in_stock;
    this.inventoryFeedUpdate[6].out_stock =
      data.out_of_stock_products?.ltl_out_of_stock;
    this.inventoryFeedUpdate[7].out_stock =
      data.out_of_stock_products?.stranded_in_catalog;
    this.inventoryFeedUpdate[8].out_stock =
      data.out_of_stock_products?.stranded_in_feed;

    for (let index = 0; index < 9; index++) {
      this.inventoryFeedUpdate[index].total =
        this.inventoryFeedUpdate[index].in_stock +
        this.inventoryFeedUpdate[index].out_stock;
      this.totalInStock += this.inventoryFeedUpdate[index].in_stock;
      this.totalOutStock += this.inventoryFeedUpdate[index].out_stock;
      this.total += this.inventoryFeedUpdate[index].total;
    }
  }

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
