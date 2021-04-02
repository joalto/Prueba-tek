import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Views/login/login.component';
import { ListSubcribersComponent } from './Views/list-subcribers/list-subcribers.component';
import { SubscriberDetailComponent } from './Views/subscriber-detail/subscriber-detail.component';
import { NewComponent } from './Views/new/new.component';
import { EditComponent } from './Views/edit/edit.component';

const Routes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'Subscribers', component: ListSubcribersComponent},
  {path: 'New', component: NewComponent},
  {path: 'Detail/:Id', component: SubscriberDetailComponent},
  {path: 'Edit/:Id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ComponentPath = [
  LoginComponent,
  ListSubcribersComponent,
  NewComponent,
  SubscriberDetailComponent,
  EditComponent
]
