import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired} from 'angular2-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }
  loggedin : boolean = false;



  logout(){
    localStorage.removeItem('token');
    this.loggedin=false;
  }

  isLoggedIn()
  {
   let token = localStorage.getItem('token');
   if(token){
     return true;
   }

   else{
     return false;
   }
  }

  login(credentials)
  {
    console.log("login service");
    console.log(credentials);

    return this.http.post("https://ensaspay-zuul-gateway.herokuapp.com/oauth/token?grant_type=password&username="+credentials.login+"&password="+credentials.password,null,{ headers: new HttpHeaders({'Authorization': 'Basic Y2xpZW50OnNlY3JldA==' })})
    .pipe(map(result=>{


      if(result && result["access_token"])
      {
        console.log("Good");

        console.log(result["access_token"]);
        localStorage.setItem('token',result["access_token"]);
        return true;
      }

      console.log("Bad");
      return false;

    }))

  }

}
