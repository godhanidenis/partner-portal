import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { endOfMonth } from 'date-fns';

@Component({
  selector: 'app-pending-shipment',
  templateUrl: './pending-shipment.component.html',
  styleUrls: ['./pending-shipment.component.scss'],
})
export class PendingShipmentComponent implements OnInit {
  @ViewChild('mySidenav', { static: false }) sidenavSection!: ElementRef;

  total = 1;
  pageSize = 50;
  pageIndex = 1;
  isLoading: boolean = false;
  isCancelOrderVisible: boolean = false;
  mode = 'date';
  pendingShipmentData = [
    {
      id: 1,
      poNumber: 'CLP 4031',
      customerName: 'AB Kajaria',
      address: 'Miami, Florida',
      products: '89932',
      quantity: 2,
      poTotal: '125.05',
      committedShip: '05-15-2023',
      afterDate: '05-22-2023',
    },
    {
      id: 2,
      poNumber: 'CLP 4035',
      customerName: 'Nidhi',
      address: 'Miami, Florida',
      products: '89932',
      quantity: 2,
      poTotal: '80.50',
      committedShip: '08-13-2023',
      afterDate: '08-29-2023',
    },
  ];
  clear_btn: boolean = false;

  badgeTotal: number = 0;
  locationCount: number = 0;
  statusCount: number = 0;
  dateCount: number = 0;

  selectLocation: string = '';
  selectStatus: string = '';
  selectDate: string = '';

  constructor() {}

  ngOnInit(): void {}

  selectAction(event: string) {
    console.log(event);
    if (event === 'Download PO') {
    } else if (event === 'Download Label') {
    } else {
      this.isCancelOrderVisible = true;
    }
  }

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }

  openNav() {
    this.sidenavSection.nativeElement.style.width = '280px';
  }

  closeNav() {
    this.sidenavSection.nativeElement.style.width = '0';
  }

  change(data: any) {
    if (data.value && data.value.length !== 0) {
      switch (data.type) {
        case 'shipOutLocation':
          if (
            data.value === 'ahmadabad' ||
            data.value === 'surat' ||
            data.value === 'rajkot' ||
            data.value === 'bhavnagar'
          ) {
            this.clear_btn = true;
            this.selectLocation = data.value;

            if (this.locationCount === 0) {
              this.locationCount++;
              this.badgeTotal++;
            }
          }
          break;
        case 'status':
          if (
            data.value === 'Manifested' ||
            data.value === 'Not yet Manifested'
          ) {
            this.clear_btn = true;
            this.selectStatus = data.value;
            if (this.statusCount === 0) {
              this.statusCount++;
              this.badgeTotal++;
            }
          }
          break;
        default:
          this.clear_btn = true;
          this.selectDate = data.value;
          if (this.dateCount === 0) {
            this.dateCount++;
            this.badgeTotal++;
          }
          break;
      }
    } else {
      if (this.badgeTotal > 0 && data.value !== null) {
        switch (data.type) {
          case 'shipOutLocation':
            this.selectLocation = '';
            this.locationCount = 0;
            this.badgeTotal--;
            break;
          case 'status':
            this.selectStatus = '';
            this.statusCount = 0;
            this.badgeTotal--;
            break;
          default:
            this.selectDate = '';
            this.dateCount = 0;
            this.badgeTotal--;
            break;
        }
      }
    }
  }

  tagRemove() {
    this.selectLocation = '';
    this.selectStatus = '';
    this.selectDate = '';

    this.locationCount = 0;
    this.statusCount = 0;
    this.dateCount = 0;

    this.badgeTotal = 0;
    this.clear_btn = false;
  }

  close(type: string) {
    if (type) {
      switch (type) {
        case 'shipOutLocation':
          this.selectLocation = '';
          this.locationCount = 0;
          this.badgeTotal--;
          break;
        case 'status':
          this.selectStatus = '';
          this.statusCount = 0;
          this.badgeTotal--;
          break;
        default:
          this.selectDate = '';
          this.dateCount = 0;
          this.badgeTotal--;
          break;
      }
    }
  }
}
