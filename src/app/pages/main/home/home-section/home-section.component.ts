import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss'],
})
export class HomeSectionComponent implements OnInit {
  @ViewChild('dChart1', { static: true }) doughnutChart1!: ElementRef;
  @ViewChild('dChart2', { static: true }) doughnutChart2!: ElementRef;
  chart: any;
  cutOut: number = 75;
  performanceIssuesList = [
    {
      id: 1,
      name: 'Handling Time Conflict',
      count: 5,
      url: 'dashboard/handling-time-conflict',
    },
    {
      id: 2,
      name: 'Unit Price Conflict',
      count: 34,
      url: 'dashboard/unit-price-conflict',
    },
    {
      id: 3,
      name: 'MAP Conflict',
      count: 51,
      url: 'dashboard/map-conflict',
    },
    {
      id: 4,
      name: '123Stores Restricted (Restricted via Order Cancellation)',
      count: 11,
      url: '',
    },
    {
      id: 5,
      name: '123Stores Restricted (Discontinued via Order Cancellation)',
      count: 14,
      url: 'dashboard/restricted-discontinued',
    },
    {
      id: 6,
      name: '123Stores Restricted (Product Price Error via Order Cancellation)',
      count: 53,
      url: '',
    },
    {
      id: 7,
      name: '123Stores Restricted (Cannot Ship Ground via Order Cancellation)',
      count: 24,
      url: 'dashboard/restricted-cannot-ship-ground',
    },
    {
      id: 8,
      name: '123Stores Restricted via Returns',
      count: 13,
      url: 'dashboard/restricted-via-returns',
    },
    {
      id: 9,
      name: 'Incomplete Offer',
      count: 12,
      url: 'dashboard/incomplete-offer',
    },
    {
      id: 10,
      name: 'Products for which Data is incomplete Stranded (In-Feed)',
      count: 43,
      url: 'dashboard/stranded-in-feed',
    },
    {
      id: 11,
      name: 'Products for which Data is incomplete Stranded (In-Catalog)',
      count: 34,
      url: 'dashboard/stranded-in-catalog',
    },
    {
      id: 12,
      name: 'Discontinued Update',
      count: 42,
      url: 'dashboard/discontinued-update',
    },
  ];

  chartOneLabel: string[] = [
    'Active',
    'Discontinued',
    'Restricted',
    'Suppressed',
    'LTL',
  ];
  chartOneColor: string[] = ['green', 'red', '#DFCFBE', '#9B2335', '#5B5EA6'];
  chartOneData: number[] = [30, 50, 3, 5, 19];
  chartOneLegend: any[] = [];

  chartTwoLabel: string[] = ['123Stores', 'Others', 'No BB'];
  chartTwoColor: string[] = ['green', 'red', '#DFCFBE'];
  chartTwoData: number[] = [53, 34, 18];
  chartTwoLegend: any[] = [];

  // plugin = {
  //   id: 'customCanvasBackgroundColor',
  //   beforeDraw: (
  //     chart: { width?: any; height?: any; ctx?: any },
  //     args: any,
  //     options: { color: string }
  //   ) => {
  //     var width = this.chart.chartArea.width,
  //       height = this.chart.chartArea.height,
  //       ctx = chart.ctx;

  //     ctx.restore();
  //     var fontSize = (height / 114).toFixed(2);
  //     ctx.font = fontSize + 'em sans-serif';
  //     ctx.textBaseline = 'middle';

  //     var text = this.chart.data.datasets[0].data.reduce(
  //         (partialSum: any, a: any) => partialSum + a,
  //         0
  //       ),
  //       textX = Math.round((width - ctx.measureText(text).width) / 2),
  //       textY =
  //         height / 2 + this.chart.legend.height + this.chart.titleBlock.height;

  //     ctx.fillText(123, textX, textY);
  //     ctx.save();
  //   },
  // };

  pendingActions = [
    {
      icon: 'border-inner',
      name: 'New',
      content: 'New Contact',
    },
    {
      icon: 'shopping-cart',
      name: 'Pending Shipment',
      content: 'Pending Shipment Contact',
    },
    {
      icon: 'close-circle',
      name: 'Cancellation Requested',
      content: 'Cancellation Requested Contact',
    },
    {
      icon: 'transaction',
      name: 'In Transit',
      content: 'In Transit Contact',
    },
  ];

  constructor(private router: Router) {
    this.chartOneLabel.map((res: string, index) => {
      this.chartOneLegend.push({
        label: res,
        color: this.chartOneColor[index],
        data: this.chartOneData[index],
      });
    });
    this.chartTwoLabel.map((res: string, index) => {
      this.chartTwoLegend.push({
        label: res,
        color: this.chartTwoColor[index],
        data: this.chartTwoData[index],
      });
    });
  }

  ngOnInit(): void {
    this.chart = new Chart(this.doughnutChart1.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.chartOneLabel,
        datasets: [
          {
            label: 'Chart One',
            data: this.chartOneData,
            backgroundColor: this.chartOneColor,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        cutout: 60,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
    this.chart = new Chart(this.doughnutChart2.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.chartTwoLabel,
        datasets: [
          {
            label: 'Chart Two',
            data: this.chartTwoData,
            backgroundColor: this.chartTwoColor,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        cutout: 60,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  shoeIssuesPage(path: string) {
    if (path) {
      this.router.navigate([`/main/${path}`]);
    }
  }
}
