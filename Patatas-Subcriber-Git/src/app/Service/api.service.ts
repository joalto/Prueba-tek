import { Injectable } from '@angular/core';
import { LoginI } from '../Pattern/ILogin';
import { ResponseI } from '../Pattern/IResponse';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Url: string = 'https://lab.arkbox.co/api/';
  Token = localStorage.getItem('Token');
  Headers =  new HttpHeaders({      
    'Authorization' : `Bearer ${this.Token}`
  });
  Status!:string;

  constructor(private Http:HttpClient) { }

  LoginUser(form:LoginI):Observable<ResponseI>{
    let Address = this.Url + 'account/login';
    const Response = this.Http.post<ResponseI>(Address, form);    
    return Response;
  }
}
