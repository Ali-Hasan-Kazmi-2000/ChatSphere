import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  let toastr = inject(ToastrService);
  let router = inject(Router);


  return next(req).pipe(
    catchError(error => {
      if(error){
        switch (error.status) {
          case 400:
            if(error.error.errors){
              const modelStateErrors = [];
              for(const key in error.error.errors){
                if(error.error.errors[key]) {
                  modelStateErrors.push(error.error.errors[key]);
                }                
              }
              throw modelStateErrors.flat();
            }else{
              toastr.error(error.error, error.status);
            }
            break;
          case 401:
            toastr.error('Unauthorized', error.status);
            break;
          case 404:
            router.navigateByUrl('/not-found');
            break;
          case 500:
            const navigationExtras = { state: { error: error.error } };
            router.navigateByUrl('/server-error', navigationExtras);
            break;
          default:
            toastr.error('Something Unexpected went wrong');
            break;
        }              
      }
      throw error;
    })    
  );
};
