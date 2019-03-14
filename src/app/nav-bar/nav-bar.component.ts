import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  summary(){
    this.router.navigate(['dashboard/summary']);
  }
  activities(){
    this.router.navigate(['dashboard/activities']);
  }
  pledges(){
    this.router.navigate(['dashboard/pledges']);
  }
  help(){
    this.router.navigate(['dashboard/help']);
  }
  navProfile() {
    var id=localStorage.getItem('user');
    console.log(id);
    this.router.navigate(['dashboard/profile/',id]);
  }
  logout(){
    this.router.navigate(['home']);
  }
}
