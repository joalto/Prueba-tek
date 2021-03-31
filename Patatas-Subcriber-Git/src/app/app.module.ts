import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsComponent } from './Login/views/views.component';
import { LoginComponent } from './Views/login/login.component';
import { ListSubcribersComponent } from './Views/list-subcribers/list-subcribers.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    LoginComponent,
    ListSubcribersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
