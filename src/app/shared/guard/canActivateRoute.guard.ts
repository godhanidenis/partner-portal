import { inject } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { Router } from '@angular/router';

export const CanActivateRoute = (route: any) => {
  const dashboardService = inject(DashboardService);
  const router = inject(Router);
  let valid: boolean = false;
  dashboardService.routeConfigMap.subscribe((res: any) => {
    const array = Array.from(res, ([key, value]) => ({ key, value }));
    let code: string[] = [];
    array.map((result: any) => {
      code.push(result.key);
    });
    code.filter((result: any) => {
      if (result === route.url[0].path) {
        console.log(result, route.url[0].path);

        valid = true;
      }
    });
  });
  if (valid) {
    return valid;
  } else {
    return router.parseUrl('/main/dashboard');
  }
};
