import { AgenceService } from './../../../Services/agence.service';
import { Agency } from './../../../Models/Agency';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit {
  listAgency:Array<Agency>;
  constructor(private agencyService : AgenceService) {
    this.agencyService.listAgencies().subscribe((data : Array<Agency>)=>{
      this.listAgency = data;
      console.log(data);
    })
   }

name;

myInput;

Search(){

}

  ngOnInit(): void {
  }

  onSelectDelete(o){
    console.log(o);

  }
  onSelectUpdate(o){
    console.log(o);

  }
}
