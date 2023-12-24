import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  errors: any;
  isSubmit: boolean = false;

  constructor(public service: CustomerService, private _router: Router) { }

  ngOnInit(): void {
    this.initCustomer();
  }

  initCustomer() {
    this.service.customer = {
      id: 0,
      name: '',
      mobile: '',
      email: ''
    }
  }
  
  onSave() {
    this.isSubmit = true;
    this.service.postCustomer().subscribe(res => {
      this._router.navigateByUrl('/customers');
    }, err => {
      this.errors = err.error.errors;
    });
  }
}
