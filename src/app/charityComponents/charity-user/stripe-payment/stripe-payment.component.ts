import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
@Component({
  selector: "app-stripe-payment",
  templateUrl: "./stripe-payment.component.html",
  styleUrls: ["./stripe-payment.component.css"]
})
export class StripePaymentComponent implements OnInit {
  public AccessCode;
  path;

  constructor() {}

  ngOnInit() {
  }
}
