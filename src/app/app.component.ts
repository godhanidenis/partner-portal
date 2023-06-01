import { Component, OnInit } from '@angular/core';
import { UserPermissionService } from './shared/service/user-permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private userPermissionService: UserPermissionService) {}
  ngOnInit(): void {
    this.userPermissionService.getPartnerPermission().subscribe((res: any) => {
      this.userPermissionService.userPermission.next(res);
    });
  }
}
