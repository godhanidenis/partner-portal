import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';

export const logoutGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.getAccessToken()) {
    return true;
  }
  // Redirect to the dashboard page
  return router.parseUrl('/main/dashboard');
};
