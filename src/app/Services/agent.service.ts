import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  link = "http://localhost:8080/agent";
  constructor(private http : HttpClient)  { }

  addAgent(agentDetails){
   // console.log("---- ADD AGENT SERVICE ----");
    console.log(agentDetails);

    var formData = new FormData();

    for (var key in agentDetails)
    {
        formData.append(key,agentDetails[key]);
    }

    formData.append("description",agentDetails["description1"]);
    formData.append("file",agentDetails["file1"]);

   return  this.http.post(this.link,formData);

  }

  listAgent(){
    return this.http.get(this.link);
  }

  deleteAgent(id){
    return this.http.delete(this.link+"/"+id);
  }

  getAgent(id){
    return this.http.get(this.link+"/"+id);
  }
}
