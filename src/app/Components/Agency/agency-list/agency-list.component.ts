import { AuthenticationService } from './../../../Services/authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgenceService } from './../../../Services/agence.service';
import { Agency } from './../../../Models/Agency';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit {

  listAgency:Array<Agency>;
  constructor(private agencyService : AgenceService,private router : Router,private auth : AuthenticationService) {
    this.agencyService.listAgencies().subscribe((data : Array<Agency>)=>{
      this.listAgency = data;
      console.log(data);
    })
   }
   FormulaireControl = new FormGroup({
     id : new FormControl(''),
    name: new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
  });
name;
deleted : boolean = false;
updated : boolean = false;
myInput;

onSubmit(){
  console.log(this.FormulaireControl.value);
  this.agencyService.addAgency(this.FormulaireControl.value).subscribe((data)=>{
    let itemIndex = this.listAgency.findIndex(item => item.id == this.FormulaireControl.value["id"]);
  this.listAgency[itemIndex] = this.FormulaireControl.value;
  this.updated = true;
  })
}

  ngOnInit(): void {
    if(!this.auth.isLoggedIn())
    {
      this.router.navigate(['login']);
    }
  }

  deleteAgency(id_agency){
    if(confirm("Etes-vous sûr de vouloir supprimer cette agence"))
    {
      this.agencyService.deleteAgency(id_agency).subscribe((data)=>{
        this.deleted = true;
        this.listAgency = this.listAgency.filter((agency:Agency)=>agency.id !== id_agency);
      })
    }

  }

  displayAgency(agency : Agency){
    this.FormulaireControl.patchValue({
      id : agency.id,
      name : agency.name,
      address : agency.address
    })
  }


}
