import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  link = "https://ensapay-agent-service.herokuapp.com/agent";
  constructor(private http : HttpClient)  { }

  addAgent(agentDetails){
    console.log("add Agent Service")
   // console.log("---- ADD AGENT SERVICE ----");
    console.log(agentDetails);

    var formData = new FormData();

    for (var key in agentDetails)
    {
        formData.append(key,agentDetails[key]);
    }

   // formData.append("description",agentDetails["description1"]);

    if(agentDetails["file1"]){
      console.log("NOT EMPTY")
      formData.append("file",agentDetails["file1"]);
    }

    else{
      console.log("EMPTYY");
    }
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

  deleteFile(id_file){
    return this.http.delete(this.link+"/file/"+id_file);
  }
}
