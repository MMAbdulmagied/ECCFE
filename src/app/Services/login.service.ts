import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  isLogIn:boolean = false;
  url: string = "http://localhost:63140/api/Account/"
  user: Customer = {
    id: 0,
    name: '',
    mobile: '',
    email: ''
  };

  constructor(private http: HttpClient) { }

  login() {
    return this.http.post(this.url, this.user)
  }
}
