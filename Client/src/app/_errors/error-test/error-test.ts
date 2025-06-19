import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-error-test',
  imports: [],
  templateUrl: './error-test.html',
  styleUrl: './error-test.css'
})
export class ErrorTest {
  baseURL = 'https://localhost:5001/api/';
  private http = inject(HttpClient);
  validationErros : [] = [];

  get400Error() {
    return this.http.get(this.baseURL + 'buggy/bad-request').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }
  get401Error() {
    return this.http.get(this.baseURL + 'buggy/auth').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }
  get404Error() {
    return this.http.get(this.baseURL + 'buggy/not-found').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }
  get500Error() {
    return this.http.get(this.baseURL + 'buggy/server-error').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  }
  get400ValidationError() {
    return this.http.post(this.baseURL + 'accounts/register', {}).subscribe({
      next: response => console.log(response),
      error: error =>{
      console.log(error),
      this.validationErros = error;
    }
        
    });
  }

}
