import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { endOfMonth } from 'date-fns';

@Component({
  selector: 'app-cancellation-requested',
  templateUrl: './cancellation-requested.component.html',
  styleUrls: ['./cancellation-requested.component.scss'],
})
export class CancellationRequestedComponent implements OnInit {
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
  cancellationRequestedData = [
    {
      id: 1,
      poNumber: 'CLP 4031',
      customerName: 'AB Kajaria Miami',
      products: '89932 Qty- 1',
      poTotal: '125.05',
      committedShip: '05-15-2023',
      afterDate: '05-22-2023',
    },
    {
      id: 2,
      poNumber: 'CLP 4035',
      customerName: 'Nidhi Miami',
      products: '89932 Qty- 2',
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

  ngOnInit(): void {
    this.filter = new FormGroup({
      status: new FormControl(''),
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

  change(value: string) {
    if (value && value.length !== 0) {
      if (value === 'Accepted' || value === 'Already Shipped') {
        this.clear_btn = true;
        this.selectStatus = value;
        if (this.statusCount === 0) {
          this.statusCount++;
          this.badgeTotal++;
        }
      }
    } else {
      if (this.badgeTotal > 0 && value !== null) {
        this.selectStatus = '';
        this.statusCount = 0;
        this.badgeTotal--;
      }
    }
  }

  tagRemove() {
    this.selectStatus = '';

    this.statusCount = 0;

    this.filter.reset();
    this.badgeTotal = 0;
    this.clear_btn = false;
    console.log(this.badgeTotal);
  }

  close(type: string) {
    if (type === 'status') {
      this.selectStatus = '';
      this.statusCount = 0;
      this.badgeTotal--;
      this.filter.controls['status'].reset();
    }
  }
}
