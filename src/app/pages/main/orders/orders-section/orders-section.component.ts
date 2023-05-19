import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-section',
  templateUrl: './orders-section.component.html',
  styleUrls: ['./orders-section.component.scss'],
})
export class OrdersSectionComponent implements OnInit {
  selectedTab: number = 0;
  constructor() {}

  ngOnInit(): void {}

  changeTabIndex(event: number) {
    this.selectedTab = event;
  }
}
