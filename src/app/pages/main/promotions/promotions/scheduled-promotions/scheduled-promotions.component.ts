import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  EditEndDatePromotions,
  Promotions,
} from 'src/app/shared/model/promotion.model';
import { PromotionsService } from 'src/app/shared/service/promotions.service';

@Component({
  selector: 'app-scheduled-promotions',
  templateUrl: './scheduled-promotions.component.html',
  styleUrls: ['./scheduled-promotions.component.scss'],
})
export class ScheduledPromotionsComponent implements OnInit {
  isLoading: boolean = false;
  total = 0;
  pageSize = 100;
  pageIndex = 1;
  pageSizeOptions = [100];
  searchForm!: FormGroup;

  scheduledPromotionsList = [];
  addDateForm!: FormGroup;
  addEndDateVisible: boolean = false;
  badgeTotal: number = 0;
  promoCode: string = '';
  startDate: string = '';
  filter_start_date: string = '';
  filter_end_date: string = '';
  filter_status: string = '';
  search_term: string = '';

  constructor(
    private promotionsService: PromotionsService,
    private message: NzMessageService
  ) {
    this.getAllScheduledPromotions(
      this.pageIndex,
      this.filter_start_date,
      this.filter_end_date,
      this.filter_status,
      this.search_term
    );
  }
  ngOnInit(): void {
    this.addDateForm = new FormGroup({
      startAndEndDate: new FormControl(''),
      endDate: new FormControl(''),
    });
  }

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startDate) {
      return false;
    }
    return endValue.getTime() <= new Date(this.startDate).getTime();
  };

  getAllScheduledPromotions(
    page: number,
    filter_start_date: string,
    filter_end_date: string,
    filter_status: string,
    search_term: string
  ) {
    this.isLoading = true;
    const data: Promotions = {
      page: page,
      filter_start_date: filter_start_date,
      filter_end_date: filter_end_date,
      filter_status: filter_status,
      search_term: search_term,
      open: true,
    };
    this.promotionsService.getAllPromotions(data).subscribe(
      (res: any) => {
        this.total = res.pagination?.total_rows ?? 0;
        this.scheduledPromotionsList = res.promos ?? [];
        this.isLoading = false;
      },
      (err) => (this.isLoading = false)
    );
  }

  pageIndexChange(page: number) {
    this.pageIndex = page;
    this.getAllScheduledPromotions(
      this.pageIndex,
      this.filter_start_date,
      this.filter_end_date,
      this.filter_status,
      this.search_term
    );
  }

  searchDataChanges(event: string) {
    this.search_term = event;
    this.getAllScheduledPromotions(
      this.pageIndex,
      this.filter_start_date,
      this.filter_end_date,
      this.filter_status,
      this.search_term
    );
  }

  filterDataChanges(filters: any) {
    (this.filter_start_date = filters?.start_date),
      (this.filter_end_date = filters?.end_date),
      (this.filter_status = filters?.promo_status),
      this.getAllScheduledPromotions(
        this.pageIndex,
        this.filter_start_date,
        this.filter_end_date,
        this.filter_status,
        this.search_term
      );
  }

  editEndDate(event: { code: string; date: string }) {
    this.addEndDateVisible = true;
    this.promoCode = event.code;
    this.startDate = event.date ? event.date : '';
    if (!this.startDate) {
      this.addDateForm.controls['startAndEndDate'].setValidators([
        Validators.required,
      ]);
      this.addDateForm.controls['startAndEndDate'].updateValueAndValidity();
      this.addDateForm.controls['endDate'].clearValidators();
      this.addDateForm.controls['endDate'].updateValueAndValidity();
    } else {
      this.addDateForm.controls['endDate'].setValidators([Validators.required]);
      this.addDateForm.controls['endDate'].updateValueAndValidity();
      this.addDateForm.controls['startAndEndDate'].clearValidators();
      this.addDateForm.controls['startAndEndDate'].updateValueAndValidity();
    }
  }

  submitForm() {
    this.isLoading = true;
    const data: EditEndDatePromotions = {
      promo_code: this.promoCode,
    };
    if (this.startDate) {
      data['start_date'] = new Date(this.startDate);
      data['end_date'] = this.addDateForm.value.endDate;
    } else {
      data['start_date'] = this.addDateForm.value.startAndEndDate[0];
      data['end_date'] = this.addDateForm.value.startAndEndDate[1];
    }
    this.promotionsService.editEndDatePromo(data).subscribe(
      (res: any) => {
        if (res.success) {
          this.message.create('success', 'End date edit successfully!');
        }
        this.addEndDateVisible = false;
        this.isLoading = false;
      },
      (err) => (this.isLoading = false)
    );
  }
}
