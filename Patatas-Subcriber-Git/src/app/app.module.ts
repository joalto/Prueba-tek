import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsComponent } from './Login/views/views.component';
import { LoginComponent } from './Views/login/login.component';
import { ListSubcribersComponent } from './Views/list-subcribers/list-subcribers.component';
import { SubscriberDetailComponent } from './Views/subscriber-detail/subscriber-detail.component';
import { NewComponent } from './Views/new/new.component';
import { EditComponent } from './Views/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    LoginComponent,
    ListSubcribersComponent,
    SubscriberDetailComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
