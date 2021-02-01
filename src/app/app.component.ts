import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ensapay-agent-frontend';

  constructor(private httpClient : HttpClient){
      httpClient.get('http://localhost:8080/agency').subscribe((data)=>{
        console.log(data);
      });
  }
}
