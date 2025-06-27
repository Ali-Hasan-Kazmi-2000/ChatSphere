import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../../_models/member';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class Members {
  private memberServices = inject(HttpClient);
  private accountServices = inject(Account);
  baseUrl = environment;

  getMembers() {
    return this.memberServices.get<Member[]>(this.baseUrl.apiUrl + 'users');
  }

  
  getMember(username: string) {
    return this.memberServices.get<Member>(this.baseUrl.apiUrl + 'users/' + username);
  }
}
