import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { JwtHelper, tokenNotExpired} from 'angular2-jwt';

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }
  loggedin : boolean = true;



  logout(){
    localStorage.removeItem('token');
    this.loggedin=false;
  }

  isLoggedIn()
  {
   // return tokenNotExpired();
    return this.loggedin;
  }

  login(credentials)
  {
    let token = "jhjhjyutez";
    localStorage.setItem('token',token);
    return true;
   /* return this.http.post("http://127.0.0.1:1000/api/auth/login",credentials)
    .pipe(map(response=>{
      let result = response.json();

      if(result && result.access_token)
      {
        console.log("Good");

        console.log(result.access_token);
        localStorage.setItem('token',result.access_token);
        return true;
      }

      console.log("Bad");
      return false;

    }))*/

  }

}
