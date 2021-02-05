import { AuthenticationService } from './../../../Services/authentication.service';
import { AgenceService } from './../../../Services/agence.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {

  send: boolean = false;

  constructor(private agencyService : AgenceService,private router : Router,private auth : AuthenticationService) { }

  FormulaireControl = new FormGroup({
    name: new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
  });

  get name() {
    return this.FormulaireControl.get('name');
  }

  get address(){
    return this.FormulaireControl.get('address')
  }

  ngOnInit(): void {
    if(!this.auth.isLoggedIn())
    {
      this.router.navigate(['login']);
    }
  }

  onSubmit(){

   console.log( this.FormulaireControl.value);
   this.agencyService.addAgency(this.FormulaireControl.value).subscribe((data)=>{
    this.send = true;
     console.log("ADDED");

   });
  }

  SendChange(){

  }

}
