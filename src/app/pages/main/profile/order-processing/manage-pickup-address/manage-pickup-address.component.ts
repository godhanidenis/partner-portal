import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';

@Component({
  selector: 'app-manage-pickup-address',
  templateUrl: './manage-pickup-address.component.html',
  styleUrls: ['./manage-pickup-address.component.scss']
})
export class ManagePickupAddressComponent {
  breadcrumb: any;
  pageSize = 10;
  pageIndex = 1;
  total = 1;
  pageSizeOptions = [5, 10, 15, 20];
  shipout = [
    {
      nickname: 'surat',
      id: 179890
    },
    {
      nickname: 'rajkot',
      id: 189079
    },
    {
      nickname: 'jamanager',
      id: 145979
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
  
  formatBreadcrumb(data: string) {
    return (data.charAt(0).toUpperCase() + data.slice(1)).replace(/-/g, ' ');
  }
}
