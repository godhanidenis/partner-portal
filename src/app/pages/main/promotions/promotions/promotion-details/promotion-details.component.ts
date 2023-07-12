import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StopPromotions } from 'src/app/shared/model/promotion.model';
import { PromotionsService } from 'src/app/shared/service/promotions.service';
import { UserPermissionService } from 'src/app/shared/service/user-permission.service';

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
  userPermissions: any;

  constructor(
    private promotionsService: PromotionsService,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService,
    private userPermissionService: UserPermissionService
  ) {
    userPermissionService.userPermission.subscribe((permission: any) => {
      this.userPermissions = permission;
    });
    this.isLoading = true;
    this.promoCode =
      this.activatedRoute.snapshot.paramMap.get('promo_code') ?? '';
    const data: StopPromotions = {
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

  downloadDetails(promo_code: string) {
    const data: StopPromotions = {
      promo_code: promo_code,
    };
    this.promotionsService
      .downloadPromotionDetails(data)
      .subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          this.message.create(
            'success',
            'Download promotion details successfully!'
          );
          var objectUrl = res.promotion_details;
          var a = document.createElement('a');
          a.download = 'document';
          a.href = objectUrl;
          a.click();
        }
      });
  }
}
