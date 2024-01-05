import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { Customer } from '../Models/customer.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  errors: any;
  isSubmit: boolean = false;

  constructor(public service: LoginService, private _router: Router) { }

  ngOnInit(): void {
    this.initUser();
  }

  initUser() {
    this.service.user = {
      id: 0,
      name: '',
      mobile: '',
      email: ''
    }
  }

  onSubmit() {
    this.isSubmit = true;

    this.service.login().subscribe(res => {
      this.service.isLogIn = true;
      this.service.user = res as Customer;
      localStorage.setItem('user', JSON.stringify(res as Customer))
      //this._router.navigateByUrl('/customers');
    }, err => {
      this.service.isLogIn = false;
      this.errors = err.error.errors;
      if (this.errors == null)
        this.errors = err.error;
    });
  }
}
