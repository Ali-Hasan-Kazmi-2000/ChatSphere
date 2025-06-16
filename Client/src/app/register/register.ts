import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../_services/account';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private accountServices = inject(Account);
  model : any = {};  
  @Output() cancelRegister = new EventEmitter<boolean>();

  register(){
    this.accountServices.register(this.model).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.cancel();
      },
      error: (error) => {
        console.error('Registration failed', error);        
      }
  })};

  cancel(){
    this.cancelRegister.emit(true);    
  }
   
}
