import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComplainsListComponent } from './complains-list/complains-list.component';
import { NewComplainComponent } from './new-complain/new-complain.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplainsListComponent,
    NewComplainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
