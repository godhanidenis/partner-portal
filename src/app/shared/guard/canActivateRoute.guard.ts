// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { DashboardService } from '../service/dashboard.service';

// @Injectable()
// export class CanActivateRoute implements CanActivate {
//   constructor(private dashboardService: DashboardService) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | boolean
//     | UrlTree
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree> {
//     return this.dashboardService.isRouteAccessible(state.url);
//   }
// }
