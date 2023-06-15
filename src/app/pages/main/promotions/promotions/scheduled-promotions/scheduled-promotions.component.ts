import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  EditEndDatePromotions,
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
  promoCode: string = '';
  startDate: string = '';

  constructor(
    private promotionsService: PromotionsService,
    private message: NzMessageService
  ) {
    this.getAllScheduledPromotions(1);
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

  getAllScheduledPromotions(page: number) {
    this.isLoading = true;
    const data: Promotions = {
      page: page,
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
    this.getAllScheduledPromotions(this.pageIndex);
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
      partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
      user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
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
