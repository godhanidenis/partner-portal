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
  loggedinUser: any;
  userPartnerName = '';

  constructor(
    private router: Router,
    private userPermissionService: UserPermissionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getLoggedInUser();

    //this.changePermission('NPS');

    this.getPartnerDetails();
  }

  getLoggedInUser() {
    this.loggedinUser = this.authService.getUser();
    if (this.loggedinUser) {
      this.loggedinUser.fullName =
        (this.loggedinUser?.first_name ?? '') +
        ' ' +
        (this.loggedinUser?.last_name ?? '');
      var matches = this.loggedinUser.fullName?.match(/\b(\w)/g);
      this.avatarCharacters = matches?.join('');
    }
  }

  getPartnerDetails() {
    if (this.loggedinUser) {
      this.userPermissionService
        .getPartnerPermission(this.loggedinUser.partner_id)
        .subscribe((res: any) => {
          this.userPartnerName = res?.partner_display_name;
          this.userPermissionService.userPermission.next(res);
        });
    }
  }

  // changePermission(type: string) {
  //   this.userPermissionService
  //     .getPartnerPermission(type)
  //     .subscribe((res: any) => {
  //       var str = res?.partner_display_name;
  //       var matches = str?.match(/\b(\w)/g);
  //       this.avatarCharacters = matches?.join('');
  //       this.userName = res?.partner_display_name;
  //       this.userPermissionService.userPermission.next(res);
  //     });
  // }

  logOutUser() {
    this.authService.logOutUser();
  }
}
