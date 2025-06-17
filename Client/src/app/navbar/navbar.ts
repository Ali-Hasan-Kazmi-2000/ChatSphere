import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../_services/account';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  accountServices = inject(Account);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  model : any = {};
  
  logout(){
    this.accountServices.logout();      
    this.router.navigateByUrl('/')
  }
  login(){
    this.accountServices.login(this.model).subscribe({
      next : _ => void this.router.navigateByUrl('/members'),
      error : (error) => this.toastr.error(error.error),
    });        
  }
}
