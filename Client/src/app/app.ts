import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  http = inject(HttpClient);
  protected title = 'Client';
  users: any;

  ngOnInit() : void{
    this.http.get('https://localhost:5001/api/users').subscribe({
      next : (response) => { this.users = response},
      error : (err) => {console.error('Error fetching users:', err);},
      complete : () => {console.log('Request completed');}      
    })
  }
}
