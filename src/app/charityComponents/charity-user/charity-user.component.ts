import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charity-user',
  templateUrl: './charity-user.component.html',
  styleUrls: ['./charity-user.component.css']
})
export class CharityUserComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  navigateRegister = function() {
    this.router.navigate(['signup'])
  }


  navigateAdmin = function() {
    this.router.navigate(['/adminlogin']);
  }


}
