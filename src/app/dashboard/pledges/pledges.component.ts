import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";

// import * as moment from 'moment';

@Component({
  selector: "app-pledges",
  templateUrl: "./pledges.component.html",
  styleUrls: ["./pledges.component.css"]
})
export class PledgesComponent implements OnInit {
  public pledgeReport: any[];
  // public searchfilter: string;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.service.allPledges().subscribe((Response: any) => {
      console.log(Response);
      this.pledgeReport = Response.data;
    });
  }
  // nextMonth(){
  //   var data = moment().add(1, 'months');
  //   this.service.allPledges().subscribe((Response:any)=>{
  //     this.pledges = Response.data;
  //     console.log(data);
  //   })
  // }
}
