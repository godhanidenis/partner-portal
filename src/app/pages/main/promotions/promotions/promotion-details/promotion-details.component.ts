import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Promotion,
  StopPromotions,
} from 'src/app/shared/model/promotion.model';
import { PromotionsService } from 'src/app/shared/service/promotions.service';

@Component({
  selector: 'app-promotion-details',
  templateUrl: './promotion-details.component.html',
  styleUrls: ['./promotion-details.component.scss'],
})
export class PromotionDetailsComponent implements OnInit {
  isLoading: boolean = false;
  promotionList: any[] = [];
  viewData: any = '';
  promoCode: string = '';

  constructor(
    private promotionsService: PromotionsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.isLoading = true;
    this.promoCode =
      this.activatedRoute.snapshot.paramMap.get('promo_code') ?? '';
    const data: StopPromotions = {
      partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
      user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
      promo_code: this.promoCode,
    };
    this.promotionsService.getPromotion(data).subscribe(
      (res: any) => {
        this.isLoading = false;
        if (res.success) {
          this.viewData = res;
          this.promotionList = res.promo_deatils;
        }
      },
      (err) => (this.isLoading = false)
    );
  }
  ngOnInit(): void {}
}
