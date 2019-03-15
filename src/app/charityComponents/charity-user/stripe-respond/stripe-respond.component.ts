import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stripe-respond',
  templateUrl: './stripe-respond.component.html',
  styleUrls: ['./stripe-respond.component.css']
})
export class StripeRespondComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
  }

  navDash() {
    this.router.navigate(['/dashboard/summary'])
  }

}
