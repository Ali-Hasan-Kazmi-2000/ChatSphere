import { HttpInterceptorFn } from '@angular/common/http';
import { Account } from '../_services/account';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountServices = inject(Account);

  if(accountServices.currentUser()){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accountServices.currentUser()?.token}`
      }
    })
  }
  return next(req);
};
