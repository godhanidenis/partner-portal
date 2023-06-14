import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Promotions,
  PromotionsService,
} from 'src/app/shared/service/promotions.service';

@Component({
  selector: 'app-scheduled-promotions',
  templateUrl: './scheduled-promotions.component.html',
  styleUrls: ['./scheduled-promotions.component.scss'],
})
export class ScheduledPromotionsComponent implements OnInit {
  isLoading: boolean = false;
  total = 1;
  pageSize = 100;
  pageIndex = 1;
  pageSizeOptions = [100];
  searchForm!: FormGroup;

  scheduledPromotionsList = [];
  addDateForm!: FormGroup;
  addEndDateVisible: boolean = false;
  badgeTotal: number = 0;

  constructor(private promotionsService: PromotionsService) {
    this.getAllScheduledPromotions(1);
  }
  ngOnInit(): void {
    this.addDateForm = new FormGroup({
      endDate: new FormControl(''),
    });
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });
  }

  getAllScheduledPromotions(page: number) {
    this.isLoading = true;
    const data: Promotions = {
      page: page,
      live: true,
    };
    this.promotionsService.getAllPromotions(data).subscribe(
      (res: any) => {
        console.log(res);
        this.total = res.pagination?.total_rows ?? 0;
        this.scheduledPromotionsList = res.promos ?? [];
        this.isLoading = false;
      },
      (err) => (this.isLoading = false)
    );
  }

  pageIndexChange(page: number) {
    this.pageIndex = page;
    this.getAllScheduledPromotions(this.pageIndex);
  }

  submitForm() {}
}
