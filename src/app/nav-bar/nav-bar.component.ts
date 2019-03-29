import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  public page;
  public payments: any;
  // public pages: Array<number>;
  public amount: any;
  public status: any;
  public date: any;
  public length: number;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
  }

  summary() {
    this.router.navigate(["dashboard/summary"]);
  }
  activities() {
    this.router.navigate(["dashboard/activities"]);
  }
  pledges() {
    this.router.navigate(["dashboard/pledges"]);
  }
  help() {
    this.router.navigate(["dashboard/help"]);
  }

  payouts() {
    this.router.navigate(["dashboard/payout"]);
  }
  navProfile() {
    var id = localStorage.getItem("user");
    this.router.navigate(["dashboard/profile/", id]);
  }
  logout() {
    this.router.navigate(["home"]);
    localStorage.removeItem("jwt");
    localStorage.removeItem("randid");
    localStorage.removeItem("user");
  }
}
