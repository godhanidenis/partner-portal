import { Component, OnInit } from '@angular/core';
import {
  Promotions,
  PromotionsService,
} from 'src/app/shared/service/promotions.service';

@Component({
  selector: 'app-completed-promotions',
  templateUrl: './completed-promotions.component.html',
  styleUrls: ['./completed-promotions.component.scss'],
})
export class CompletedPromotionsComponent implements OnInit {
  isLoading: boolean = false;
  total = 1;
  pageSize = 100;
  pageIndex = 1;
  pageSizeOptions = [100];

  completedPromotionsList = [];
  constructor(private promotionsService: PromotionsService) {
    this.getAllCompletedPromotions(1);
  }

  ngOnInit(): void {}

  getAllCompletedPromotions(page: number) {
    this.isLoading = true;
    const data: Promotions = {
      page: page,
      live: false,
    };
    this.promotionsService.getAllPromotions(data).subscribe(
      (res: any) => {
        console.log(res);
        this.total = res.pagination?.total_rows ?? 0;
        this.completedPromotionsList = res.promos ?? [];
        this.isLoading = false;
      },
      (err) => (this.isLoading = false)
    );
  }

  pageIndexChange(page: number) {
    this.pageIndex = page;
    this.getAllCompletedPromotions(this.pageIndex);
  }
}
