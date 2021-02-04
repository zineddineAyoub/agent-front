import { Files } from './../../../Models/Files';
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
    patente_number : new FormControl(null),
    phone_number : new FormControl('', Validators.required),
    identity_number : new FormControl(null, Validators.required),
    address : new FormControl('', Validators.required),
    email :new FormControl('', Validators.required),
    commerce_registration : new FormControl('', Validators.required),
    id_agence : new FormControl(''),
    //file : new FormControl(''),
    confirm_email : new FormControl('', Validators.required),

    description : new FormControl(''),
    addedFile : new FormControl('')

  });



  filedata:any;
   result : Object[] = [];
  listFiles:[];
  id : string;
  readfiles;

  fileEvent(e){
    console.log(e.target.files[0]);

      this.filedata = e.target.files[0];

      this.result.push(this.filedata)
      this.FormulaireControl.value['file1'] =this.filedata;
      console.log( this.FormulaireControl.value);

      console.log("---------------------------------");
      console.log(this.result);


  }

  ngOnInit(){

   /* this.fields.forEach(x=>{
      this.FormulaireControl.addControl(x.namep,new FormControl());
      this.FormulaireControl.addControl(x.nameq,new FormControl());
     });*/

    this.route.params.subscribe((data)=>{
      console.log(data);
      if(data["id"]){
        console.log("yeess");
        this.update = true;

        this.agentService.getAgent(data["id"]).subscribe((data : Agent)=>{
          console.log(data);
          this.id= data["id"];
          this.readfiles = data.files;


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
    this.SendChange();
  }

  SendChange(){

    if(this.update===true){
      console.log("TRUE UPDATE");
      this.FormulaireControl.value["id"] = this.id;
    }

    console.log("****************");

    console.log(this.FormulaireControl.value);

    this.agentService.addAgent(this.FormulaireControl.value).subscribe((data)=>{
      console.log("your result");
      this.send = true;
      console.log(data);
      this.scrollTop();
      if(this.update!==true){
        this.FormulaireControl.reset();
        this.FormulaireControl["file1"] = null;
      }

      console.log(this.FormulaireControl.value);


    });

  }


  deleteFile(id_file){
    console.log("deletee",id_file);
    this.agentService.deleteFile(id_file).subscribe((data)=>{
      console.log("deleted");
     this.readfiles = this.readfiles.filter((file:Files)=>file.id !== id_file );

    })
  }

  scrollTop() {
    window.scroll(0,0);
}
}


