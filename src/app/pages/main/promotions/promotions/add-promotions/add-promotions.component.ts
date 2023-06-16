import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PromoTemplate } from 'src/app/shared/model/promotion.model';
import { PromotionsService } from 'src/app/shared/service/promotions.service';

@Component({
  selector: 'app-add-promotions',
  templateUrl: './add-promotions.component.html',
  styleUrls: ['./add-promotions.component.scss'],
})
export class AddPromotionsComponent implements OnInit {
  @Output() close = new EventEmitter();
  add_promotion!: FormGroup;
  isLoading: boolean = false;
  selectFile: any = '';

  constructor(
    private promotionsService: PromotionsService,
    private message: NzMessageService
  ) {}
  ngOnInit(): void {
    this.add_promotion = new FormGroup({
      startAndEndDate: new FormControl('', [Validators.required]),
      downloadTemplate: new FormControl(''),
      uploadFile: new FormControl('', [Validators.required]),
    });
  }

  selectFiles(event: any) {
    this.selectFile = event?.target?.files[0];
  }

  selectDownloadTemplate(event: boolean) {
    const data: PromoTemplate = {
      partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
      user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
      include_data: event,
    };
    this.promotionsService.promoTemplate(data).subscribe((res: any) => {
      if (res.success) {
        this.message.create(
          'success',
          'Download promotion template successfully!'
        );
        var objectUrl = res.temlate_url;
        var a = document.createElement('a');
        a.download = 'document';
        a.href = objectUrl;
        a.click();
      }
    });
  }

  submit() {
    this.isLoading = true;
    if (this.add_promotion?.valid) {
      let formData = new FormData();
      formData.append('partner_id', '03b0b0e6-2118-42fc-8495-a091365bee1d');
      formData.append('user_id', 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036');
      formData.append(
        'start_date',
        this.add_promotion.value.startAndEndDate[0]
      );
      formData.append('end_date', this.add_promotion.value.startAndEndDate[1]);
      formData.append('uploaded_file', this.selectFile);

      this.promotionsService.createPromotion(formData).subscribe(
        (res: any) => {
          this.isLoading = false;
          if (res.success) {
            this.message.create('success', 'Add promotion successfully!');
            this.handleCancel();
          }
        },
        (err) => (this.isLoading = false)
      );
    }
  }

  handleCancel() {
    this.close.emit();
  }
}
