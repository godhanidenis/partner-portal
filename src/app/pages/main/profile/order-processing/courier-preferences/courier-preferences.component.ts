import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courier-preferences',
  templateUrl: './courier-preferences.component.html',
  styleUrls: ['./courier-preferences.component.scss'],
})
export class CourierPreferencesComponent implements OnInit {
  isLoading: boolean = false;
  courierPreferenceList = [
    {
      id: 1,
      courierPreferenceName: 'UPS',
      activeStatus: true,
    },
    {
      id: 2,
      courierPreferenceName: 'USPS',
      activeStatus: false,
    },
    {
      id: 3,
      courierPreferenceName: 'Fedex',
      activeStatus: true,
    },
    {
      id: 4,
      courierPreferenceName: 'Smepost',
      activeStatus: false,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
