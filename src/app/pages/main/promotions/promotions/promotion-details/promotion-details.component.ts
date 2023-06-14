import { Component, OnInit } from '@angular/core';
import {
  Promotion,
  PromotionsService,
} from 'src/app/shared/service/promotions.service';

@Component({
  selector: 'app-promotion-details',
  templateUrl: './promotion-details.component.html',
  styleUrls: ['./promotion-details.component.scss'],
})
export class PromotionDetailsComponent implements OnInit {
  isLoading: boolean = false;
  promotionList: any[] = [];
  viewData: any = '';

  constructor(private promotionsService: PromotionsService) {
    this.isLoading = true;
    const data: Promotion = {
      partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
      user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
      promo_code: 'ACF-SPECIAL-PRICE-PROMO-69',
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
