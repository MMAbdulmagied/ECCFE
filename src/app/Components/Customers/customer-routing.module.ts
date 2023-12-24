import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CustomersListComponent
      },
      { path: 'newCustomer', component: NewCustomerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
