import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { endOfMonth } from 'date-fns';

@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss'],
})
export class DeliveredComponent implements OnInit {
  // @ViewChild('content', { static: false }) contentSection!: ElementRef;
  @ViewChild('mySidenav', { static: false }) sidenavSection!: ElementRef;
  @ViewChild('section', { static: false }) section!: ElementRef;

  total = 1;
  pageSize = 50;
  pageIndex = 1;
  pageSizeOptions = [50, 100, 250, 500];
  isLoading: boolean = false;
  mode = 'date';
  filter!: FormGroup;
  deliveredData = [
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
  skuCount: number = 0;
  carrierCount: number = 0;

  selectSku: string = '';
  selectCarrier: string = '';

  constructor() {}

  ngOnInit(): void {
    this.filter = new FormGroup({
      sku: new FormControl(''),
      carrier: new FormControl(''),
    });
  }

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }

  openNav() {
    this.sidenavSection.nativeElement.style.width = '280px';
    // this.contentSection.nativeElement.style.marginRight = '280px';
    this.section.nativeElement.style.minHeight = '88%';
  }

  closeNav() {
    this.sidenavSection.nativeElement.style.width = '0';
    // this.contentSection.nativeElement.style.marginRight = '0';
    this.section.nativeElement.style.minHeight = 'auto';
  }

  change(data: any) {
    if (data.value && data.value.length !== 0) {
      switch (data.type) {
        case 'sku':
          this.clear_btn = true;
          this.selectSku = data.value;
          if (this.skuCount === 0) {
            this.skuCount++;
            this.badgeTotal++;
          }
          break;
        case 'carrier':
          if (
            data.value === 'carrier1' ||
            data.value === 'carrier2' ||
            data.value === 'carrier3'
          ) {
            this.clear_btn = true;
            this.selectCarrier = data.value;
            if (this.carrierCount === 0) {
              this.carrierCount++;
              this.badgeTotal++;
            }
          }
          break;
      }
    } else {
      if (this.badgeTotal > 0 && data.value !== null) {
        switch (data.type) {
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
        }
      }
    }
  }

  tagRemove() {
    this.selectSku = '';
    this.selectCarrier = '';

    this.skuCount = 0;
    this.carrierCount = 0;

    this.filter.reset();
    this.badgeTotal = 0;
    this.clear_btn = false;
  }

  close(type: string) {
    if (type) {
      switch (type) {
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
      }
    }
  }
}
