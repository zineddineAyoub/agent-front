import { AuthenticationService } from './../../Services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public service : AuthenticationService, private router : Router) { }

  ngOnInit(): void {

  }
  logout(){
    this.service.logout();
    this.router.navigate(['login']);
  }
}
