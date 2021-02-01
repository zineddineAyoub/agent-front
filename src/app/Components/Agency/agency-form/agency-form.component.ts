import { AgenceService } from './../../../Services/agence.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {

  send: boolean = false;

  constructor(private agencyService : AgenceService) { }

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
  }

  onSubmit(){
    this.send = true;
   console.log( this.FormulaireControl.value);
   this.agencyService.addAgency(this.FormulaireControl.value).subscribe((data)=>{
     console.log("ADDED");

   });
  }

  SendChange(){

  }

}
