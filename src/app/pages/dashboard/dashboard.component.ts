import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;
  breadcrumb: any[] = [];

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.breadcrumbs.subscribe((res: any) => {
      this.breadcrumb = res;
    });
  }

  ngOnInit() {}

  // backButton(no: number, path: string) {
  //   if (this.breadcrumb[this.breadcrumb.length - 1].path !== path) {
  //     this.router.navigate([`/dashboard/${path}`]);
  //   }
  // }
}
