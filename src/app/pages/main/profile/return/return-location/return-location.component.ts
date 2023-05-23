import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-return-location',
  templateUrl: './return-location.component.html',
  styleUrls: ['./return-location.component.scss'],
})
export class ReturnLocationComponent {
  addAddressVisible: boolean = false;
  editAddressVisible: boolean = false;
  isLoading: boolean = false;
  total = 1;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [5, 10, 15, 20];

  uploadModelVisible: boolean = false;

  returnLocationList = [
    {
      id: 1,
      location_id: 179890,
      address_nickname: 'Ahmadabad',
      company_name: 'InfoTech',
      contact_name: 'Lax',
      phone: '8529637410',
      extension: '9517536842',
      email: 'lax@gmail.com',
      address_line_1: 'SG Rode,Ahmadabad',
      pin_code: '684265',
      city: 'Ahmadabad',
      address_line_2: '',
      state: 'state 1',
      open_at: new Date(0, 0, 0, 0, 9, 30),
      close_at: new Date(0, 0, 0, 0, 6, 30),
      time_zone: 'PST',
      vendor_address: true,
      rto_address: true,
      supplier_name: 'max',
      supplier_gstin: '78451',
      select_pickup_address: 'address 2',
      status: 1,
      activeStatus: false,
      primaryAddress: false,
    },
    {
      id: 2,
      location_id: 852963,
      address_nickname: 'Vadodra',
      company_name: 'TCS',
      contact_name: 'Max',
      phone: '9578461232',
      extension: '9587461223',
      email: 'max@gmail.com',
      address_line_1: 'Varachaa,Vadodra',
      pin_code: '958746',
      city: 'Vadodra',
      address_line_2: '',
      state: 'state 2',
      open_at: new Date(0, 0, 0, 0, 10, 0),
      close_at: new Date(0, 0, 0, 0, 7, 0),
      time_zone: 'CST',
      vendor_address: true,
      rto_address: false,
      supplier_name: 'max',
      supplier_gstin: '78451',
      select_pickup_address: 'address 3',
      status: 0,
      activeStatus: true,
      primaryAddress: false,
    },
    {
      id: 3,
      location_id: 963852,
      address_nickname: 'Bhavnagar',
      company_name: 'Skill Code',
      contact_name: 'Loy',
      phone: '9578461232',
      extension: '9587461223',
      email: 'loy@gmail.com',
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
      select_pickup_address: 'address 4',
      status: 0,
      activeStatus: false,
      primaryAddress: true,
    },
  ];
  editData: any;
  modelHeader: string = 'Add';
  primaryContact: number = 1;
  viewData: any;
  viewAddressVisible: boolean = false;

  constructor(private router: Router, private modal: NzModalService) {}

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
    this.returnLocationList.filter((res: any) => {
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

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }

  handleCancel(): void {
    this.addAddressVisible = false;
    this.viewAddressVisible = false;
    this.uploadModelVisible = false;
  }
}
