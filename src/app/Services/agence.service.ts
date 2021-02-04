import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  link = "https://ensapay-agent-service.herokuapp.com/agency";
 //link = "http://localhost:8080/agency";
  constructor(private http : HttpClient) { }

  listAgencies(){
    return this.http.get(this.link);
  }

  addAgency(agency){
    console.log("add me dis");

    return this.http.post(this.link,agency);
  }

  deleteAgency(id_agency){
    return this.http.delete(this.link+"/"+id_agency);
  }
}
