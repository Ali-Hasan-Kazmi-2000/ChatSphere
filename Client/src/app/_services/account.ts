import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../_models/User';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Account {
  
  private http = inject(HttpClient);
  currentUser = signal<User | null>(null);
  baseurl = environment.apiUrl;

  login(model: any) {
    return this.http.post<User>(this.baseurl+ 'accounts/login', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    )
  }

  register(model: any) {
    return this.http.post<User>(this.baseurl+ 'accounts/register', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    )
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
