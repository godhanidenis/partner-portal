import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.getUser();
  if (authService.getAccessToken()) {
    // if (user && user?.is_first) {
    //   authService.logOutUser();
    //   router.parseUrl('/auth/login');
    // }
    return true;
  }
  // Redirect to the login page
  return router.parseUrl('/auth/login');
};
