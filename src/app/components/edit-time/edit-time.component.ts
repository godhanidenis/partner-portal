import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-edit-time',
  templateUrl: './edit-time.component.html',
  styleUrls: ['./edit-time.component.scss'],
})
export class EditTimeComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Input()
  editData!: {
    mpn: string;
    current: number;
    extraData?: any;
    sku?: string;
  };
  @Input() editLabel: string[] = [];
  @Input() section: string = '';
  @Input() extraData: any;
  @Output() close = new EventEmitter();
  editTimeForm!: FormGroup;
  isLoading: boolean = false;
  submitError: boolean = false;

  constructor(
    private productService: ProductService,
    private message: NzMessageService
  ) {}
  ngOnInit(): void {
    this.editTimeForm = new FormGroup({
      new: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    this.submitError = true;
    if (this.editTimeForm.valid) {
      this.isLoading = true;
      let data: any = {
        partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
        user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
        product: {
          mpn: this.editData.mpn,
          sku: this.editData.sku,
        },
      };
      switch (this.section) {
        case 'Handling Time':
          data.product['handling_time'] = this.editTimeForm.value.new;
          break;
        case 'Unit Price':
          data.product['unit_price'] = this.editTimeForm.value.new;
          break;
        case 'MAP Conflict':
          data.product['map'] = this.editTimeForm.value.new;
          break;
        case 'Amazon ASIN':
          data.product['asin'] = this.editTimeForm.value.new;
          break;
        case 'Stranded In Catalog':
          data.product['product_status'] = this.editTimeForm.value.new;
          break;
        case 'Discontinued Update':
          data.product['product_status'] = this.editTimeForm.value.new;
          break;
      }
      this.productService.editProduct(data).subscribe(
        (res: any) => {
          console.log(res);
          if (res.success) {
            this.message.create('success', 'Edit product successfully!');
          }
          this.isLoading = false;
          this.handleCancel();
        },
        (err) => (this.isLoading = false)
      );
    }
  }

  handleCancel() {
    this.isVisible = false;
    this.close.emit();
  }

  navigateAsin(asin: string) {
    window.open(`https://www.amazon.com/dp/${asin}`);
  }
}
