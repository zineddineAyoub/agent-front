import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  FormulaireControl = new FormGroup({
    login: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
