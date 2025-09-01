import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CONSTANTS } from 'src/app/constants/constants';
import { Storage } from 'src/app/shared/providers/storage/storage';

export const authGuard: CanActivateFn = (route, state) => {
  const storageSrv = inject(Storage);
  const router = inject(Router);
  const auth = storageSrv.get<{ id: string }>(CONSTANTS.AUTH);
  if(!auth) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
