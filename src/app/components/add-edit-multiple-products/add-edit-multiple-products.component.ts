import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserPermissionService } from 'src/app/shared/service/user-permission.service';

@Component({
  selector: 'app-add-edit-multiple-products',
  templateUrl: './add-edit-multiple-products.component.html',
  styleUrls: ['./add-edit-multiple-products.component.scss'],
})
export class AddEditMultipleProductsComponent implements OnInit {
  @Output() closeModel = new EventEmitter();
  @Input() templateType: string = '';
  selectType: string = '';
  isUploadVisible: boolean = false;
  chooseType = [
    {
      label: 'Edit MPN',
      value: 'EDIT_MPN',
    },
    {
      label: 'Add/Edit ASIN',
      value: 'ADD_EDIT_ASIN',
    },
    {
      label: 'Add/Edit UPC',
      value: 'ADD_EDIT_UPC',
    },
    {
      label: 'Edit Price',
      value: 'EDIT_PRICE',
    },
    {
      label: 'Edit Shipping Dimensions',
      value: 'EDIT_SHIPPING_DIMENSIONS',
    },
    {
      label: 'Change Product Status',
      value: 'CHANGE_PRODUCT_STATUS',
    },
    {
      label: 'Remove ASIN',
      value: 'REMOVE_ASIN',
    },
    {
      label: 'Remove UPC',
      value: 'REMOVE_UPC',
    },
    {
      label: 'Edit Product Details',
      value: 'EDIT_PRODUCT_DETAILS',
    },
    // 'ADD_PRODUCT',
  ];
  name = new FormControl('');
  userPermissions: any = '';

  constructor(private userPermissionService: UserPermissionService) {
    userPermissionService.userPermission.subscribe((permission: any) => {
      this.userPermissions = permission;
      if (this.userPermissions.partner_map) {
        this.chooseType.push({
          label: 'Add/Edit MAP',
          value: 'ADD_EDIT_MAP ',
        });
      }
      if (this.userPermissions.partner_sku_level_handling) {
        this.chooseType.push({
          label: 'SKU specific Handling Time ',
          value: 'EDIT_SKU_SPECIFIC_HANDLING_TIME',
        });
      }
    });
  }
  ngOnInit(): void {
    if (this.templateType) {
      this.selectType = this.templateType;
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
