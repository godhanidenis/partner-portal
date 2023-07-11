import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-section',
  templateUrl: './orders-section.component.html',
  styleUrls: ['./orders-section.component.scss'],
})
export class OrdersSectionComponent implements OnInit {
  selectedTab: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation
      ? (navigation.extras.state as { index: number })
      : '';
    this.selectedTab = state ? state.index : 0;
  }

  ngOnInit(): void {}

  changeTabIndex(event: number) {
    this.selectedTab = event;
  }
}
