import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { BreadcrumbService } from 'src/app/shared/service/breadcrumb.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  gridStyle = {
    width: '25%',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.breadcrumbs.next(this.activatedRoute.snapshot.url);
  }

  navigate() {
    this.router.navigate(['/dashboard/profile/ach-form']);
  }
}
