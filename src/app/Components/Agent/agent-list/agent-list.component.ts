import { AuthenticationService } from './../../../Services/authentication.service';
import { Agent } from './../../../Models/Agent';
import { AgentService } from './../../../Services/agent.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  constructor(private agentService : AgentService,private router : Router,private auth : AuthenticationService) { }
  listAgent : Array<Agent>;
  ngOnInit(): void {

    if(!this.auth.isLoggedIn())
    {
      this.router.navigate(['login']);
    }

    this.agentService.listAgent().subscribe((data : Array<Agent>)=>{
        this.listAgent = data;
        console.log(this.listAgent);
    })
  }

  DeleteAgent(id_agent){
    if(confirm("Etes-vous sûr de vouloir supprimer l'agent ?")){
      this.agentService.deleteAgent(id_agent).subscribe((data)=>{
        console.log("DLETED");

        this.listAgent = this.listAgent.filter((agent:Agent)=>agent.id !== id_agent );
      })
    }

  }



}
