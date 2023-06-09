import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-certi-of-insurance',
  templateUrl: './certi-of-insurance.component.html',
  styleUrls: ['./certi-of-insurance.component.scss'],
})
export class CertiOfInsuComponent implements OnInit {
  certiOfInsuranceDate = {
    producerNameAddress: 'Insurance Pvt Ltd, New York, New York 10001 ',
    insuredNameAddress: 'XYZ Stores, Livingston, Montana 59101',
    dateInsured: 'Aug 24, 2022',
    classification: 'data collection',
    documentType: 'PDF',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  backButton(path: string) {
    this.router.navigate([`/main/${path}`]);
  }
}
