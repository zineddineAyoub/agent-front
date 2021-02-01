import { Agent } from './../../../Models/Agent';
import { AgentService } from './../../../Services/agent.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

  constructor(private agentService : AgentService) { }
  listAgent : Array<Agent>;
  ngOnInit(): void {

    this.agentService.listAgent().subscribe((data : Array<Agent>)=>{
        this.listAgent = data;
        console.log(this.listAgent);
    })
  }

  DeleteAgent(id_agent){

    this.agentService.deleteAgent(id_agent).subscribe((data)=>{
      console.log("DLETED");

      this.listAgent = this.listAgent.filter((agent:Agent)=>agent.id !== id_agent );
    })
  }



}
