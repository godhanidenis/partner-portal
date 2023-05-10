import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rebate',
  templateUrl: './rebate.component.html',
  styleUrls: ['./rebate.component.scss'],
})
export class RebateComponent implements OnInit {
  rebateList = [
    {
      id: 1,
      lowerThreshold: 'lowerThreshold 1',
      upperThreshold: 'upperThreshold 1',
      discount: 10,
    },
    {
      id: 2,
      lowerThreshold: 'lowerThreshold 2',
      upperThreshold: 'upperThreshold 2',
      discount: 5,
    },
    {
      id: 3,
      lowerThreshold: 'lowerThreshold 3',
      upperThreshold: 'upperThreshold 3',
      discount: 20,
    },
  ];

  rebateDate = {
    code: 123,
    year: 2022,
    type: 'Growth',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
