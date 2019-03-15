import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params, Router}from "@angular/router"
@Component({
  selector: 'app-stripe-payment',
  templateUrl: './stripe-payment.component.html',
  styleUrls: ['./stripe-payment.component.css']
})
export class StripePaymentComponent implements OnInit {
  public AccessCode;
  path;

  constructor(public rout:ActivatedRoute,public router:Router) { 
    this.path = this.router.url;
    console.log(this.path);
  }

  ngOnInit() { 
  this.rout.params.subscribe((params:Params)=>
    {
       this.loadProject(params.access_token);
     }
    )
  }
    loadProject(id){
       this.AccessCode=id; 
       var data = { "stripe_id": id};
       console.log('AccessCode',this.AccessCode);
      }
}
