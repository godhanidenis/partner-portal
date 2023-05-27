import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-po-detail-page',
  templateUrl: './po-detail-page.component.html',
  styleUrls: ['./po-detail-page.component.scss'],
})
export class PoDetailPageComponent implements OnInit {
  total = 1;
  pageSize = 50;
  pageIndex = 1;
  pageSizeOptions = [50, 100, 250, 500];
  isLoading: boolean = false;
  orderSummary = {
    shipByDate: 'IMMEDIATE',
    shippingCarrier: 'EasyShip UPS',
    shippingService: 'GROUND',
    shippingTerms: 'Collect',
    poDate: 'Monday, Apr 03,2023',
    committedShipDate: 'Monday, Apr 03,2023',
    cancelAfterDate: 'Monday, Apr 10,2023',
  };
  orderStatus = {
    status: 'Pending Shipment',
    action: 'Cancel Order',
    actions: 'Mark as shipped',
  };

  shipFrom = {
    name: 'Panacea Product Corporation (ANT)',
    address: '90 McMillen RD Antioch, IL 60002, US',
    locationCode: 'WDK-LOC-001',
  };
  shipTo = {
    name: 'Renee Stipa',
    address: '129 SPRING OAK DR MALVERN, PA 19355-8739,US',
    phone: '(646) 760-8776',
  };
  poDescriptionData = [
    {
      id: 1,
      productDescription: {
        mpn: '24603',
        description: 'Absolute Feeder Blue',
        upc: '047977005614',
        brand: 'Woodlink',
        asin: 'B0057QN478',
        totalNoOfBox: '1',
        unit: '1-Box #1',
        shippingDims: '14" x 16" x 11", 10lbs',
        trackingNo: '1ZRR11990397673743',
      },
      qty: '1',
      unitPrice: '64.06',
      unitAllowances: '0.00',
      unitExtendedPrice: '64.06',
      extendedTotal: '64.06',
    },
  ];
  poNo: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.poNo = params['poNo'];
    });
  }
  ngOnInit(): void {}
}
