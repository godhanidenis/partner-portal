import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import {
  DownloadTemplates,
  ProductService,
} from 'src/app/shared/service/product.service';
import { UserPermissionService } from 'src/app/shared/service/user-permission.service';

@Component({
  selector: 'app-edit-multiple-products',
  templateUrl: './edit-multiple-products.component.html',
  styleUrls: ['./edit-multiple-products.component.scss'],
})
export class EditMultipleProductsComponent implements OnInit {
  @Output() closeModel = new EventEmitter();
  @Input() templateType: string = '';
  @Input() actionType: string = '';
  selectType: string = '';
  isUploadVisible: boolean = false;

  userPermissions: any = '';
  chooseType = [
    {
      label: 'EDIT_MPN',
      value: 'Edit MPN',
    },
    {
      label: 'ADD_EDIT_ASIN',
      value: 'Add/Edit ASIN',
    },
    {
      label: 'ADD_EDIT_UPC',
      value: 'Add/Edit UPC',
    },
    {
      label: 'EDIT_PRICE',
      value: 'Edit Price',
    },
    {
      label: 'EDIT_SHIPPING_DIMENSIONS',
      value: 'Edit Shipping Dimensions',
    },
    {
      label: 'CHANGE_PRODUCT_STATUS',
      value: 'Change Product Status',
    },
    {
      label: 'REMOVE_ASIN',
      value: 'Remove ASIN',
    },
    {
      label: 'REMOVE_UPC',
      value: 'Remove UPC',
    },
    {
      label: 'EDIT_PRODUCT_DETAILS',
      value: 'Edit Product Details',
    },
    // 'ADD_PRODUCT',
  ];
  multiProduct!: FormGroup;
  isLoading: boolean = false;
  selectFile: any;
  referenceCode: string = '';

  constructor(
    private userPermissionService: UserPermissionService,
    private message: NzMessageService,
    private productService: ProductService
  ) {
    userPermissionService.userPermission.subscribe((permission: any) => {
      this.userPermissions = permission;
      if (this.userPermissions.partner_map) {
        this.chooseType.push({
          label: 'ADD_EDIT_MAP',
          value: 'Add/Edit MAP',
        });
      }
      if (this.userPermissions.partner_sku_level_handling) {
        this.chooseType.push({
          label: 'EDIT_SKU_SPECIFIC_HANDLING_TIME',
          value: 'SKU specific Handling Time',
        });
      }
    });
  }
  ngOnInit(): void {
    if (this.templateType) {
      this.selectType = this.templateType;
    }
    this.multiProduct = new FormGroup({
      selectType: new FormControl(''),
      downloadTemplate: new FormControl(''),
      uploadFile: new FormControl('', [Validators.required]),
    });
    if (this.actionType === 'Edit') {
      this.multiProduct.controls['selectType'].setValidators([
        Validators.required,
      ]);
    }
  }

  selectFiles(event: any) {
    this.selectFile = event?.target?.files[0];
  }

  selectDownloadTemplate(event: boolean) {
    if (this.multiProduct.controls['selectType'].value) {
      const data: DownloadTemplates = {
        template_type: this.multiProduct.controls['selectType'].value,
        include_data: event,
      };
      this.productService.downloadTemplates(data).subscribe((res: any) => {
        if (res.success) {
          this.message.create('success', 'download product successfully!');
          var objectUrl = res.temlate_url;
          var a = document.createElement('a');
          a.download = 'document';
          a.href = objectUrl;
          a.click();
        }
      });
    } else {
      if (this.multiProduct.controls['downloadTemplate'].value) {
        this.message.create('warning', 'Please select edit type first!');
        setTimeout(() => {
          this.multiProduct.controls['downloadTemplate'].setValue('');
        }, 100);
      }
    }
  }

  downloadTemplate() {
    const data: DownloadTemplates = {
      template_type: 'ADD_PRODUCT',
      include_data: false,
    };
    this.productService.downloadTemplates(data).subscribe((res: any) => {
      if (res.success) {
        this.message.create('success', 'download product successfully!');
        var objectUrl = res.temlate_url;
        var a = document.createElement('a');
        a.download = 'document';
        a.href = objectUrl;
        a.click();
      }
    });
  }

  actionFile(type: string) {
    if (type === 'upload') {
      this.isUploadVisible = true;
    } else {
    }
  }

  submit() {
    this.isLoading = true;
    const data = new FormData();
    data.append('partner_id', '03b0b0e6-2118-42fc-8495-a091365bee1d');
    data.append('user_id', 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036');
    data.append(
      'template_type',
      this.multiProduct.controls['selectType'].value
        ? this.multiProduct.controls['selectType'].value
        : 'ADD_PRODUCT'
    );
    data.append('uploaded_file_url', this.selectFile);

    this.productService.productAddEditUpload(data).subscribe(
      (result: any) => {
        this.isLoading = false;
        if (result.success) {
          this.referenceCode = result?.reference_code;

          // this.message.create(
          //   'success',
          //   `${this.actionType} multiple product successfully!`
          // );
          this.handleCancel();
        }
      },
      (err) => (this.isLoading = false)
    );
  }

  handleCancel() {
    this.closeModel.emit(this.referenceCode);
  }
}
