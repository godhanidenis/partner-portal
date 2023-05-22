import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { endOfMonth } from 'date-fns';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent implements OnInit {
  @ViewChild('content', { static: false }) contentSection!: ElementRef;
  @ViewChild('mySidenav', { static: false }) sidenavSection!: ElementRef;
  @ViewChild('section', { static: false }) section!: ElementRef;

  total = 1;
  pageSize = 50;
  pageIndex = 1;
  pageSizeOptions = [50, 100, 250, 500];
  isLoading: boolean = false;
  mode = 'date';
  filter!: FormGroup;
  allOrdersData = [
    {
      id: 1,
      poNumber: 'CLP 4031',
      customerName: 'AB Kajaria Miami',
      products: '89932 Qty- 1',
      poTotal: '125.05',
      shippingDetails: {
        name: 'Ekart Logistics',
        number: 'AWB:SRTP5737737138',
      },
      status: 'Out for Delivery',
    },
    {
      id: 2,
      poNumber: 'CLP 4035',
      customerName: 'Nidhi Miami',
      products: '89932 Qty- 2',
      poTotal: '80.50',
      shippingDetails: {
        name: 'Ekart Logistics',
        number: 'AWB:SRTP5737737138',
      },
      status: 'In-Transi',
    },
  ];
  clear_btn: boolean = false;

  badgeTotal: number = 0;
  locationCount: number = 0;
  skuCount: number = 0;
  carrierCount: number = 0;
  statusCount = 0;
  dateCount: number = 0;

  selectLocation: string = '';
  selectSku: string = '';
  selectCarrier: string = '';
  selectStatus = '';
  selectDate: string = '';
  ranges = {
    Today: [new Date(), new Date()],
    YesterDay: [
      new Date(new Date().setDate(new Date().getDate() - 1)),
      new Date(new Date().setDate(new Date().getDate() - 1)),
    ],
    'Last 7 Days': [
      new Date(new Date().setDate(new Date().getDate() - 6)),
      new Date(new Date()),
    ],
    'Last 30 Days': [
      new Date(new Date().setDate(new Date().getDate() - 29)),
      new Date(new Date()),
    ],
    'This Month': [new Date(), endOfMonth(new Date())],
    'Last Month': [
      new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      ),
      new Date(),
    ],
    // Custom: [],
  };

  constructor() {}

  ngOnInit(): void {
    this.filter = new FormGroup({
      shipOutLocation: new FormControl(''),
      sku: new FormControl(''),
      carrier: new FormControl(''),
      committedShipDate: new FormControl(''),
      status: new FormControl(''),
    });
  }

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }

  openNav() {
    this.sidenavSection.nativeElement.style.width = '280px';
    this.contentSection.nativeElement.style.marginRight = '280px';
    this.section.nativeElement.style.minHeight = '88%';
  }

  closeNav() {
    this.sidenavSection.nativeElement.style.width = '0';
    this.contentSection.nativeElement.style.marginRight = '0';
    this.section.nativeElement.style.minHeight = 'auto';
  }

  change(value: string, type: string) {
    if (value && value.length !== 0) {
      switch (type) {
        case 'shipOutLocation':
          if (
            value === 'ahmadabad' ||
            value === 'surat' ||
            value === 'rajkot' ||
            value === 'bhavnagar'
          ) {
            this.clear_btn = true;
            this.selectLocation = value;

            if (this.locationCount === 0) {
              this.locationCount++;
              this.badgeTotal++;
            }
          }
          break;
        case 'sku':
          this.clear_btn = true;
          this.selectSku = value;
          if (this.skuCount === 0) {
            this.skuCount++;
            this.badgeTotal++;
          }
          break;
        case 'carrier':
          if (
            value === 'carrier1' ||
            value === 'carrier2' ||
            value === 'carrier3'
          ) {
            this.clear_btn = true;
            this.selectCarrier = value;
            if (this.carrierCount === 0) {
              this.carrierCount++;
              this.badgeTotal++;
            }
          }
          break;
        case 'status':
          if (
            value === 'New' ||
            value === 'Pending Shipment' ||
            value === 'In-Transit' ||
            value === 'Delivered' ||
            value === 'Cancellation Requested' ||
            value === 'Cancelled' ||
            value === 'RTO'
          ) {
            this.clear_btn = true;
            this.selectStatus = value;
            if (this.statusCount === 0) {
              this.statusCount++;
              this.badgeTotal++;
            }
          }
          break;
        default:
          this.clear_btn = true;
          this.selectDate = value;
          if (this.dateCount === 0) {
            this.dateCount++;
            this.badgeTotal++;
          }
          break;
      }
    } else {
      if (this.badgeTotal > 0 && value !== null) {
        switch (type) {
          case 'shipOutLocation':
            this.selectLocation = '';
            this.locationCount = 0;
            this.badgeTotal--;
            break;
          case 'sku':
            this.selectSku = '';
            this.skuCount = 0;
            this.badgeTotal--;
            break;
          case 'carrier':
            this.selectCarrier = '';
            this.carrierCount = 0;
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
    this.selectSku = '';
    this.selectCarrier = '';
    this.selectStatus = '';
    this.selectDate = '';

    this.locationCount = 0;
    this.skuCount = 0;
    this.carrierCount = 0;
    this.statusCount = 0;
    this.dateCount = 0;

    this.filter.reset();
    this.badgeTotal = 0;
    this.clear_btn = false;
    console.log(this.badgeTotal);
  }

  close(type: string) {
    if (type) {
      switch (type) {
        case 'shipOutLocation':
          this.selectLocation = '';
          this.locationCount = 0;
          this.badgeTotal--;
          this.filter.controls['shipOutLocation'].reset();
          break;
        case 'sku':
          this.selectSku = '';
          this.skuCount = 0;
          this.badgeTotal--;
          this.filter.controls['sku'].reset();
          break;
        case 'carrier':
          this.selectCarrier = '';
          this.carrierCount = 0;
          this.badgeTotal--;
          this.filter.controls['carrier'].reset();
          break;
        case 'status':
          this.selectStatus = '';
          this.statusCount = 0;
          this.badgeTotal--;
          this.filter.controls['status'].reset();
          break;
        default:
          this.selectDate = '';
          this.dateCount = 0;
          this.badgeTotal--;
          this.filter.controls['committedShipDate'].reset();
          break;
      }
    }
  }
}
