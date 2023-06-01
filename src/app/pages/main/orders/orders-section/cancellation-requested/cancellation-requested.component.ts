import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { endOfMonth } from 'date-fns';

@Component({
  selector: 'app-cancellation-requested',
  templateUrl: './cancellation-requested.component.html',
  styleUrls: ['./cancellation-requested.component.scss'],
})
export class CancellationRequestedComponent implements OnInit {
  @ViewChild('mySidenav', { static: false }) sidenavSection!: ElementRef;

  total = 1;
  pageSize = 50;
  pageIndex = 1;
  isLoading: boolean = false;
  mode = 'date';
  cancellationRequestedData = [
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
  statusCount: number = 0;

  selectStatus: string = '';

  constructor() {}

  ngOnInit(): void {}

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
      if (data.value === 'Accepted' || data.value === 'Already Shipped') {
        this.clear_btn = true;
        this.selectStatus = data.value;
        if (this.statusCount === 0) {
          this.statusCount++;
          this.badgeTotal++;
        }
      }
    } else {
      if (this.badgeTotal > 0 && data.value !== null) {
        this.selectStatus = '';
        this.statusCount = 0;
        this.badgeTotal--;
      }
    }
  }

  tagRemove() {
    this.selectStatus = '';

    this.statusCount = 0;

    this.badgeTotal = 0;
    this.clear_btn = false;
  }

  close(type: string) {
    if (type === 'status') {
      this.selectStatus = '';
      this.statusCount = 0;
      this.badgeTotal--;
    }
  }
}
