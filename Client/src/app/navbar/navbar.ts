import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../_services/account';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-navbar',
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  accountServices = inject(Account);
  model : any = {};
  
  logout(){
    this.accountServices.logout();      
  }
  login(){
    this.accountServices.login(this.model).subscribe({
      next : (response) => console.log(response),
      error : (error) => console.log(error),
    });        
  }
}
