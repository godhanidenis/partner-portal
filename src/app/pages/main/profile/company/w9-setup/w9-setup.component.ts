import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-w9-setup',
  templateUrl: './w9-setup.component.html',
  styleUrls: ['./w9-setup.component.scss'],
})
export class W9SetupComponent implements OnInit {
  w9SetUpDate = {
    legalName: 'Subhveer',
    taxIdentificationNumber: '132534535',
    address: 'rajkot',
    classification: 'data collection',
    documentType: 'PDF',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
