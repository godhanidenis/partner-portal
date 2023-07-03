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

  feedCode: string = '';
  isLoading: boolean = true;
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
      feed_code: this.feedCode,
    };
    if (this.feedResult.toLocaleLowerCase() === 'processed') {
      this.inventoryService.inventoryFeed(data).subscribe(
        (res: any) => {
          this.isLoading = false;
          this.editData = res;
          this.total =
            res?.active_in_stock ??
            0 + res?.active_out_of_stock ??
            0 + res?.discontinued_in_stock ??
            0 + res?.discontinued_out_of_stock ??
            0 + res?.restricted_in_stock ??
            0 + res?.restricted_out_of_stock ??
            0 + res?.ltl_in_stock ??
            0 + res?.ltl_out_of_stock ??
            0 + res?.stranded_in_feed_in_stock ??
            0 + res?.stranded_in_feed_out_of_stock ??
            0;
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

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
