import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComplainRoutingModule } from './complain-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ComplainRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule
  ],
  providers: [
    
  ]
})
export class ComplainsModule { }
