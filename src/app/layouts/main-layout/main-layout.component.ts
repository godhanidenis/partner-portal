import { AuthService } from 'src/app/shared/service/auth.service';
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
  avatarCharacters: string = '';
  userName: string = '';

  constructor(
    private router: Router,
    private userPermissionService: UserPermissionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.changePermission('NPS');
  }

  changePermission(type: string) {
    this.userPermissionService
      .getPartnerPermission(type)
      .subscribe((res: any) => {
        var str = res?.partner_display_name;
        var matches = str?.match(/\b(\w)/g);
        this.avatarCharacters = matches?.join('');
        this.userName = res?.partner_display_name;
        this.userPermissionService.userPermission.next(res);
      });
  }

  logOutUser() {
    this.authService.logOutUser();
  }
}
