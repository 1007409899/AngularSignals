import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router)
  const isAuth = authService.authStatus();
  if(isAuth === AuthStatus.authenticated){
    return true;
  }

  router.navigateByUrl('/auth/login');
  return false;
};
