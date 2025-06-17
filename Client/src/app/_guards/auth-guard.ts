import { CanActivateFn } from '@angular/router';
import { Account } from '../_services/account';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  let accountServices = inject(Account);
  let toastr = inject(ToastrService);

  if(accountServices.currentUser()) {
    return true;
  }
  else{
    toastr.error('You shall not pass!');
    return false;
  }
  
};
