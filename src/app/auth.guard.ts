import {CanActivateFn, RedirectCommand, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  return new RedirectCommand(router.createUrlTree(['/error']));
};
