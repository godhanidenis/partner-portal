import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  PromotionsService,
  StopPromotions,
} from 'src/app/shared/service/promotions.service';

@Component({
  selector: 'app-promotion-table',
  templateUrl: './promotion-table.component.html',
  styleUrls: ['./promotion-table.component.scss'],
})
export class PromotionTableComponent implements OnInit {
  @Input() total: number = 1;
  @Input() pageSize: number = 100;
  @Input() pageIndex: number = 1;
  @Input() isLoading: boolean = false;
  @Input() listOfData: any[] = [];
  @Input() tabName: string = '';

  @Output() action = new EventEmitter();
  @Output() pageChange = new EventEmitter();

  pageSizeOptions = [100];

  constructor(
    private promotionsService: PromotionsService,
    private message: NzMessageService
  ) {}
  ngOnInit(): void {}

  pageIndexChange(page: number) {
    this.pageChange.emit(page);
  }

  selectAction(type: string, promo_code: string) {
    switch (type) {
      case 'end date':
        this.action.emit(promo_code);
        break;
      case 'EOD':
        const data: StopPromotions = {
          partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
          user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
          promo_code: promo_code,
          stop_eod: 'True',
        };

        this.promotionsService.stopPromotions(data).subscribe((res: any) => {
          console.log(res);
          this.message.create('success', `Stop this promotion : ${promo_code}`);
        });
        break;
      case 'Now':
        const dataNow: StopPromotions = {
          partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
          user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
          promo_code: promo_code,
          stop_eod: 'False',
        };

        this.promotionsService.stopPromotions(dataNow).subscribe((res: any) => {
          console.log(res);
          this.message.create('success', `Stop this promotion : ${promo_code}`);
        });
        break;

      default:
        break;
    }
  }
}
