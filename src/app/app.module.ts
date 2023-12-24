import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplainsListComponent } from './Components/Complains/complains-list/complains-list.component';
import { NewComplainComponent } from './Components/Complains/new-complain/new-complain.component';
import { CertificatesListComponent } from './Components/Certificates/certificates-list/certificates-list.component';
import { NewCertificateComponent } from './Components/Certificates/new-certificate/new-certificate.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CustomersListComponent } from './Components/Customers/customers-list/customers-list.component';
import { NewCustomerComponent } from './Components/Customers/new-customer/new-customer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComplainsListComponent,
    NewComplainComponent,
    CertificatesListComponent,
    NewCertificateComponent,
    PageNotFoundComponent,
    CustomersListComponent,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
