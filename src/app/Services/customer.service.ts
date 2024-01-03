import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = "http://localhost:63140/api/Customers"
  customers: Customer[] | undefined;
  customer: Customer = {
    id: 0,
    name: '',
    mobile: '',
    email: ''
  };

  constructor(private http: HttpClient) { }

  getAllCustomers() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.customers = res as Customer[];
      }
    )
  }

  postCustomer() {
    return this.http.post(this.url, this.customer)
  }
}
