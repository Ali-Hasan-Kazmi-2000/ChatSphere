import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  http = inject(HttpClient);  
  users: any = {};

  ngOnInit(): void {
    this.getUsers();
  }

  
  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next : (response) => { this.users = response},
      error : (err) => {console.error('Error fetching users:', err);},
      complete : () => {console.log('Request completed');}      
    })
  }
}
