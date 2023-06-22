import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  DashboardService,
  SalesReport,
} from 'src/app/shared/service/dashboard.service';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss'],
})
export class SalesReportComponent implements OnInit {
  isLoading: boolean = false;
  reportList: any[] = [];
  type: string = '';

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {
    this.type = this.route.snapshot.paramMap.get('type') ?? '';
    this.isLoading = true;
    const reqData: SalesReport = {
      partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
      user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
      type: this.type,
    };
    dashboardService.salesReport(reqData).subscribe(
      (res: any) => {
        console.log(res);
        this.isLoading = false;
        if (res.success) {
          this.reportList = res.data;
        }
      },
      (err) => (this.isLoading = false)
    );
  }

  ngOnInit(): void {}

  downloadReport() {
    const reqData: SalesReport = {
      partner_id: '03b0b0e6-2118-42fc-8495-a091365bee1d',
      user_id: 'ab1a0fbb-bd96-4e70-85e6-e1bc76111036',
      type: this.type,
    };
    this.dashboardService.downloadSalesReport(reqData).subscribe(
      (res: any) => {
        console.log(res);
        this.isLoading = false;
        if (res.success) {
          var objectUrl = res.sales_report;
          var a = document.createElement('a');
          a.download = 'document';
          a.href = objectUrl;
          a.click();
        }
      },
      (err) => (this.isLoading = false)
    );
  }
}
