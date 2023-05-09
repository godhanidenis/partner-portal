import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';

@Component({
  selector: 'app-certi-of-insurance',
  templateUrl: './certi-of-insurance.component.html',
  styleUrls: ['./certi-of-insurance.component.scss'],
})
export class CertiOfInsuComponent implements OnInit {
  breadcrumb: any;

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
