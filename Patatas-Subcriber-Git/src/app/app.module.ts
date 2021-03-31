import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ComponentPath } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './Templates/headers/headers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    ComponentPath
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
