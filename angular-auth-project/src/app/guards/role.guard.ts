import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredRole = route.data['role'];

  const currentRole = authService.getRole();

  if (currentRole === requiredRole) {
    return true;
  }

  return router.createUrlTree(['/unauthorized']);
};
