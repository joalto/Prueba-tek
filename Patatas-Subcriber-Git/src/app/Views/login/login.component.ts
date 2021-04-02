import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../Service/api.service';
import { LoginI } from '../../Pattern/ILogin';
import { ResponseI } from '../../Pattern/IResponse';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
    UserName : new FormControl('', Validators.required),
    Password : new FormControl('', Validators.required)
  })

  constructor(private Api:ApiService, 
    private Router:Router) { }

  ngOnInit(): void {
    this.CheckToken();
  }

  CheckToken(){
    if(localStorage.getItem('Token')){
      this.Router.navigate(['Subscribers']);
    }
  }

  OnLogin(Form: LoginI){
     this.Api.LoginUser(Form).subscribe(Data =>{
      let dataResponse:ResponseI = Data;
      if (dataResponse.Status == 1){
        localStorage.setItem("Token", dataResponse.Token);
         this.CheckToken();  
      }
    })
  
  }
}
