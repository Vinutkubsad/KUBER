import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";
import { faCog } from '@fortawesome/free-solid-svg-icons';

// import { MessagingService } from '../services/messaging.service';

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  faCog = faCog;
  public page;
  public payments: any;
  // public pages: Array<number>;
  public amount: any;
  public status: any;
  public date: any;
  public length: number;

  message;
  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
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
