import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../_services/account';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  accountServices = inject(Account);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  model : any = {};    

  register(){
    this.accountServices.register(this.model).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigateByUrl('/members');
      },
      error: (error) => {
        this.toastr.error(error.error);        
      }
  })};   
}
