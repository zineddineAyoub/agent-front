import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  link = "http://localhost:8080/agency";
  constructor(private http : HttpClient) { }

  listAgencies(){
    return this.http.get(this.link);
  }

  addAgency(agency){
    console.log("add me dis");

    return this.http.post(this.link,agency);
  }
}
