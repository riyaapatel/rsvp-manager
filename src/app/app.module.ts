import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RSVPModule } from './rsvp/rsvp.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessageBoxComponent } from './shared/components/message-box/message-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RSVPModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
