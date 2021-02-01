import { Agent } from './../../../Models/Agent';
import { Agency } from './../../../Models/Agency';
import { AgenceService } from './../../../Services/agence.service';
import { AgentService } from './../../../Services/agent.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent-form',
  templateUrl: './agent-form.component.html',
  styleUrls: ['./agent-form.component.css']
})
export class AgentFormComponent implements OnInit {

  send: boolean = false;
  listAgencies : Array<Agency>;
  fields=[{namep:'description1',id:1,nameq:'file1'}];
  public  products_selected= [];
  update : boolean = false;
  constructor(private agentService : AgentService,private agencyService : AgenceService, private route : ActivatedRoute) { }

  FormulaireControl = new FormGroup({

    first_name : new FormControl('', Validators.required),
    last_name : new FormControl('', Validators.required),
    identity_document : new FormControl('', Validators.required),
    birth_day : new FormControl(''),
    patente_number : new FormControl(''),
    phone_number : new FormControl('', Validators.required),
    identity_number : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    email :new FormControl('', Validators.required),
    commerce_registration : new FormControl('', Validators.required),
    id_agence : new FormControl(''),
    //file : new FormControl(''),
    confirm_email : new FormControl('', Validators.required),
    file : new FormControl(''),
    description : new FormControl('')
  });



  filedata:any;
   result : Object[] = [];
  listFiles:[];
  fileEvent(e){
    console.log(e.target.files[0]);

      this.filedata = e.target.files[0];
      this.result.push(this.filedata)
      this.FormulaireControl.value['file'+this.fields.length] =this.filedata;
      console.log("---------------------------------");
      console.log(this.result);


  }

  ngOnInit(){

    this.fields.forEach(x=>{
      this.FormulaireControl.addControl(x.namep,new FormControl());
      this.FormulaireControl.addControl(x.nameq,new FormControl());
     });

    this.route.params.subscribe((data)=>{
      console.log(data);
      if(data["id"]){
        console.log("yeess");
        this.update = true;

        this.agentService.getAgent(data["id"]).subscribe((data : Agent)=>{
          console.log(data);

          this.FormulaireControl.patchValue({
            first_name : data.first_name,
            last_name : data.last_name,
            address : data.address,
            birthd_day : data.birth_day,
            commerce_registration : data.commerce_registration,
            email : data.email,
            id_agence : data.id_agence,
            identity_document : data.identity_document,
            identity_number : data.identity_number,
            patente_number : data.patente_number,
            phone_number : data.phone_number,
            description1 : data.files.description,
            file1 : data.files.file
          })
        });

      }

    })



     this.agencyService.listAgencies().subscribe((data : Array<Agency>)=>{
        this.listAgencies = data
     })
  }

  onSubmit(){
    console.log(this.FormulaireControl.value);

  }

  SendChange(){
    this.send = true;

    this.agentService.addAgent(this.FormulaireControl.value).subscribe((data)=>{
      console.log("your result");

      console.log(data);

    });

  }

  addDocument(){
    let length = this.fields.length+1;
    console.log(length);
    console.log(this.fields);

    let namep = 'description'+length;
    let nameq = 'file'+length;
   this.fields.push({namep:namep,id:length,nameq:nameq});
   this.FormulaireControl.addControl(namep,new FormControl());
   this.FormulaireControl.addControl(nameq,new FormControl());
  }
}


