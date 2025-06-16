
import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Account } from './_services/account';
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [Navbar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private accountServices = inject(Account); 
 
  ngOnInit() : void{
   this.setCurrentUser();
  }

  setCurrentUser(){
    var userString = localStorage.getItem('user');
    if(!userString) return;

    var user = JSON.parse(userString);
    this.accountServices.currentUser.set(user);
  }
 
}
