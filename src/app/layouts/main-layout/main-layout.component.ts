import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPermissionService } from 'src/app/shared/service/user-permission.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  isCollapsed = false;

  constructor(
    private router: Router,
    private userPermissionService: UserPermissionService
  ) {}

  ngOnInit(): void {}

  changePermission(type: string) {
    this.userPermissionService
      .getPartnerPermission(type)
      .subscribe((res: any) => {
        this.userPermissionService.userPermission.next(res);
      });
  }
}
