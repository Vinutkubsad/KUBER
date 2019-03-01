import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor( public router : Router ) { }

  ngOnInit() {
    let token = localStorage.getItem('jwt');
    if (token) {
      this.router.navigate(['charity/paymentreport']);
    }
  }

  navLogin() {
    this.router.navigate(['charityUser/signin']);
  }


  navigateCharity = function() {
    this.router.navigate(['charityUser/signin']);
  }


}
