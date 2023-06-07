import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
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
    'Edit Full Catalog',
    'Edit MPN',
    'Add/Edit Amazon ASIN',
    'Remove Amazon ASIN',
    'Add/Edit UPC',
    'Remove UPC',
    'Edit Product Details',
    'Edit Unit Price',
    'Edit Shipping Dimensions',
    'Edit Product Status',
  ];
  multiProduct!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private userPermissionService: UserPermissionService,
    private message: NzMessageService
  ) {
    userPermissionService.userPermission.subscribe((permission: any) => {
      this.userPermissions = permission;
      if (this.userPermissions.partner_map) {
        this.chooseType.push('Add/Edit MAP');
      }
      if (this.userPermissions.partner_sku_level_handling) {
        this.chooseType.push('Edit SKU specific Handling time');
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

  selectDownloadTemplate(event: string) {
    if (this.multiProduct.controls['selectType'].value) {
    } else {
      if (this.multiProduct.controls['downloadTemplate'].value) {
        this.message.create('warning', 'Please select edit type first!');
        setTimeout(() => {
          this.multiProduct.controls['downloadTemplate'].setValue('');
        }, 100);
      }
    }
  }

  actionFile(type: string) {
    if (type === 'upload') {
      this.isUploadVisible = true;
    } else {
    }
  }

  handleCancel(type: string) {
    if (type === 'upload') {
      this.isUploadVisible = false;
    } else {
      this.closeModel.emit();
    }
  }
}
