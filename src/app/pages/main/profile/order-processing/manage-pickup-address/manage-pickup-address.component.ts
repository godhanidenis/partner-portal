import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';

@Component({
  selector: 'app-manage-pickup-address',
  templateUrl: './manage-pickup-address.component.html',
  styleUrls: ['./manage-pickup-address.component.scss'],
})
export class ManagePickupAddressComponent implements OnInit {
  breadcrumb: any;
  addAddressVisible: boolean = false;
  viewAddressVisible: boolean = false;
  uploadModelVisible: boolean = false;
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];
  editData: any;
  viewData: any;

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  shipOut = [
    {
      id: 1,
      location_id: 179890,
      address_nickname: 'surat',
      company_name: 'Fly On Tech',
      contact_name: 'Jay',
      phone: '9578461232',
      extension: '9587461223',
      email: 'jay@gmail.com',
      address_line_1: 'vip circle,surat',
      pin_code: '958746',
      city: 'surat',
      address_line_2: '',
      state: 'state 1',
      open_at: new Date(0, 0, 0, 0, 9, 30),
      close_at: new Date(0, 0, 0, 0, 6, 30),
      time_zone: 'PST',
      vendor_address: true,
      rto_address: true,
      supplier_name: 'max',
      supplier_gstin: '78451',
      select_pickup_address: 'addres3',
      status: 1,
      activeStatus: false,
      primaryAddress: false,
    },
    {
      id: 2,
      location_id: 852963,
      address_nickname: 'Rajkot',
      company_name: 'TCS',
      contact_name: 'Max',
      phone: '9578461232',
      extension: '9587461223',
      email: 'max@gmail.com',
      address_line_1: 'Varachaa,surat',
      pin_code: '958746',
      city: 'surat',
      address_line_2: '',
      state: 'state 2',
      open_at: new Date(0, 0, 0, 0, 10, 0),
      close_at: new Date(0, 0, 0, 0, 7, 0),
      time_zone: 'CST',
      vendor_address: true,
      rto_address: false,
      supplier_name: 'max',
      supplier_gstin: '78451',
      select_pickup_address: '',
      status: 0,
      activeStatus: true,
      primaryAddress: false,
    },
    {
      id: 3,
      location_id: 963852,
      address_nickname: 'Bhavnagar',
      company_name: 'Skill Code',
      contact_name: 'Lax',
      phone: '9578461232',
      extension: '9587461223',
      email: 'lax@gmail.com',
      address_line_1: 'Simada,surat',
      pin_code: '958746',
      city: 'surat',
      address_line_2: '',
      state: 'state 3',
      open_at: new Date(0, 0, 0, 0, 9, 0),
      close_at: new Date(0, 0, 0, 0, 6, 0),
      time_zone: 'MST',
      vendor_address: false,
      rto_address: true,
      supplier_name: '',
      supplier_gstin: '',
      select_pickup_address: 'addres3',
      status: 0,
      activeStatus: false,
      primaryAddress: true,
    },
  ];

  modelHeader: string = 'Add';
  primaryContact: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private router: Router,
    private modal: NzModalService
  ) {
    this.breadcrumbService.breadcrumbs.next(this.activatedRoute.snapshot.url);
    console.log(this.activatedRoute.snapshot.url);
    // this.shipOut = this.shipOut.map((ele: any) => {
    //   return { ...ele, expand: false };
    // });
    this.breadcrumb = this.activatedRoute.snapshot.url;
  }

  ngOnInit(): void {}

  switchChange() {
    console.log('switch');
    this.modal.confirm({
      nzTitle: 'Active / Inactive',
      nzContent: 'Do you Want to change these status?',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }

  primaryClick(element: number) {
    this.primaryContact = element;
    this.shipOut.filter((res: any) => {
      if (res.id === element) {
        res.primaryAddress = true;
      } else {
        res.primaryAddress = false;
      }
      return res;
    });
  }

  addPickupAddress(actionType: string, data: any) {
    if (actionType === 'upload') {
      this.uploadModelVisible = true;
    } else {
      this.modelHeader = actionType;
      if (actionType === 'Add') {
        this.editData = '';
        this.addAddressVisible = true;
      } else if (actionType === 'Edit' || actionType === 'View') {
        this.editData = data;
        this.addAddressVisible = true;
      }
      // else if (actionType === 'View') {
      //   this.viewData = data;
      //   this.viewAddressVisible = true;
      // }
    }
  }

  handleCancel(): void {
    this.addAddressVisible = false;
    this.viewAddressVisible = false;
    this.uploadModelVisible = false;
  }
}
