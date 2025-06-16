import { Component, inject, OnInit } from '@angular/core';
import { Register } from '../register/register';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  http = inject(HttpClient);  
  users: any = {};
  registerMode = true;

  ngOnInit(): void {
    this.getUsers();
  }


  toggleRegister() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterForm(event: boolean) {  
    this.registerMode = event;    
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next : (response) => { this.users = response},
      error : (err) => {console.error('Error fetching users:', err);},
      complete : () => {console.log('Request completed');}      
    })
  }
}
