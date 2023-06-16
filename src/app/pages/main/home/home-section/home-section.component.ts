import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { DashboardService } from 'src/app/shared/service/dashboard.service';
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
  performanceIssuesList: any[] = [];

  performanceUrlList = [
    'dashboard/performance-issues/handling-time-conflict',
    'dashboard/performance-issues/unit-price-conflict',
    'dashboard/performance-issues/map-conflict',
    'dashboard/performance-issues/restricted-via-order',
    'dashboard/performance-issues/restricted-discontinued',
    'dashboard/performance-issues/restricted-product-price-error',
    'dashboard/performance-issues/restricted-cannot-ship-ground',
    'dashboard/performance-issues/restricted-via-returns',
    'dashboard/performance-issues/incomplete-offer',
    'dashboard/performance-issues/stranded-in-feed',
    'dashboard/performance-issues/stranded-in-catalog',
    'dashboard/performance-issues/discontinued-update',
  ];

  recommendationIssuesList: any[] = [];

  recommendationUrlList = [
    'products/add-product',
    'dashboard/recommendation-issues/price-correction',
    'dashboard/recommendation-issues/lack-of-sales-demand',
    'dashboard/recommendation-issues/products-losing-importance-on-amazon',
    'dashboard/recommendation-issues/shipping-label',
    'profile/allowances/co-op',
    'profile/allowances/rebate',
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
  isLoading: boolean = false;

  pendingActions = [
    {
      icon: 'border-inner',
      name: 'New',
      content: 'New Contact',
      url: 'orders/order-section',
    },
    {
      icon: 'shopping-cart',
      name: 'Pending Shipment',
      content: 'Pending Shipment Contact',
      url: 'orders/order-section',
    },
    {
      icon: 'close-circle',
      name: 'Cancellation Requested',
      content: 'Cancellation Requested Contact',
      url: 'orders/order-section',
    },
    {
      icon: 'transaction',
      name: 'In Transit',
      content: 'In Transit Contact',
      url: 'orders/order-section',
    },
  ];

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {
    this.isLoading = true;
    const data = {
      partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
      user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
    };
    dashboardService.getIssues(data).subscribe(
      (res: any) => {
        this.isLoading = false;
        if (res.success) {
          this.performanceIssuesList = [];
          res.performance.map((result: any, index: number) => {
            result['url'] = this.performanceUrlList[index];
            this.performanceIssuesList.push(result);
          });
          this.recommendationIssuesList = [];
          res.recommendation.map((response: any, index: number) => {
            response['url'] = this.recommendationUrlList[index];
            this.recommendationIssuesList.push(response);
          });
        }
      },
      (err) => (this.isLoading = false)
    );
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
    this.createChart(
      this.chartOneLabel,
      this.chartOneData,
      this.chartOneColor,
      this.doughnutChart1.nativeElement
    );
    this.createChart(
      this.chartTwoLabel,
      this.chartTwoData,
      this.chartTwoColor,
      this.doughnutChart2.nativeElement
    );
  }

  createChart(
    label: string[],
    data: number[],
    color: string[],
    reference: ElementRef | any
  ) {
    this.chart = new Chart(reference, {
      type: 'doughnut',
      data: {
        labels: label,
        datasets: [
          {
            label: 'Chart One',
            data: data,
            backgroundColor: color,
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

  redirectPendingActions(path: string, number: number) {
    if (path) {
      const navigationExtras: NavigationExtras = { state: { index: number } };
      this.router.navigate([`/main/${path}`], navigationExtras);
    }
  }

  shoeIssuesPage(path: string) {
    if (path) {
      this.router.navigate([`/main/${path}`]);
    }
  }
}
