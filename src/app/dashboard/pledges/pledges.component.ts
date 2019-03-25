import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
// import * as moment from 'moment';

@Component({
  selector: 'app-pledges',
  templateUrl: './pledges.component.html',
  styleUrls: ['./pledges.component.css']
})
export class PledgesComponent implements OnInit {

//   private page: number = 1;
//   public pledges: any[];
//   public searchResults: any[]
//   public id;
//   public DonarName;
//   public pages: Array<number>;
//   public interval: any;
//   public status: any;
//   public date: any;
//   public items: any;
//   public pageSize: number;
//   public flag: any = false;

//   public pagination = {
//     currentPage: 1,
//     noOfItemsPerPage: 10,
//     ellipses: true,
//     maxSize: 10,
//     totalCount: 0
//   }


  constructor(private service: DataService, private router: Router) { }
 

  ngOnInit() {
//     this.getReports();
  }

//   getReports() {
//     this.service.allPledges().subscribe((Response: any) => {
//       console.log(Response);
//       this.pledges = Response.data;
//     })
//   }
// nextMonth(){
//   var data = moment().add(1, 'months');
//   this.service.allPledges().subscribe((Response:any)=>{ 
//     this.pledges = Response.data;
//     console.log(data);
//   })
// }
}
