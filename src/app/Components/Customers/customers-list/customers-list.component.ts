import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor(public service:CustomerService) { }

  ngOnInit(): void {
    this.service.getAllCustomers();
  }

}
