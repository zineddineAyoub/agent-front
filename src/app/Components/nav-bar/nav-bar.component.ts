import { AuthenticationService } from './../../Services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public service : AuthenticationService) { }

  ngOnInit(): void {

  }
  logout(){
    this.service.logout();
  }
}
