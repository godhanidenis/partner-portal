import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';

@Component({
  selector: 'app-w9-setup',
  templateUrl: './w9-setup.component.html',
  styleUrls: ['./w9-setup.component.scss'],
})
export class W9SetupComponent implements OnInit {
  breadcrumb: any;

  forminfo = [
    {
      legalname: 'rajveer',
      taxNumber: '123234324',
      address: 'rajkot',
      classification: 'senior class',
      doctype: 'pdf',
    },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private router: Router
  ) {
    this.breadcrumbService.breadcrumbs.next(this.activatedRoute.snapshot.url);
    console.log(this.activatedRoute.snapshot.url);

    this.breadcrumb = this.activatedRoute.snapshot.url;
  }

  backButton(no: number, path: string) {
    if (this.breadcrumb[this.breadcrumb.length - 1].path !== path) {
      this.router.navigate([`/main/${path}`]);
    }
  }

  ngOnInit(): void {}
}
