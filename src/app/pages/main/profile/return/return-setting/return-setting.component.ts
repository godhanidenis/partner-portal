import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-setting',
  templateUrl: './return-setting.component.html',
  styleUrls: ['./return-setting.component.scss'],
})
export class ReturnSettingComponent implements OnInit {
  preferenceDate = {
    reimbursementMethod: 'Credit Note',
    cosDocumentation: true,
    corsDocumentation: false,
    buyerRemorseRestocking: 10,
    rtoRestocking: 5,
    returnAllowance: 2,
    fieldDestroy: true,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
