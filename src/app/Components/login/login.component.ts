import { AuthenticationService } from './../../Services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthenticationService, private router : Router) { }

  FormulaireControl = new FormGroup({
    login: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  });

  loggedIn;

  ngOnInit(): void {
    if(this.auth.isLoggedIn())
    {
      this.router.navigate(['ajouterAgence']);
    }

  }

  onSubmit(){
    console.log("log in clicked");

    this.auth.login(this.FormulaireControl.value).subscribe((data)=>{
      this.router.navigate(['ajouterAgence']);
      console.log(data);
      this.loggedIn = data;

    })
  }

}
