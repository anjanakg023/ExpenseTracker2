import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  public loginVerify(login:Login)
  {
    //calling webservice
    console.log(login);
    return this.httpClient.get(environment.apiUrl+"/api/users/login/"+login.LoginId+"&"+login.Password)
  }
}
