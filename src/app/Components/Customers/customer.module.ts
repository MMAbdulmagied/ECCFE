import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  providers: [

  ]
})
export class CustomersModule { }
