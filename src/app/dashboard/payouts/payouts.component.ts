import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-payouts',
  templateUrl: './payouts.component.html',
  styleUrls: ['./payouts.component.css']
})
export class PayoutsComponent implements OnInit {

  public reccuring : any = [{ name: 'Yes', value: true }, { name: 'No', value: false }];
  public intervals : any = [{ name : 'Weekly' , value: 'week'},{name : 'Biweekly', value : 'byweek'}, {name : 'Monthly', value : 'month'}, {name : 'Quarterly', value : 'quarter'}, {name : 'Half-yearly', value : 'half-year'},{ name: 'Yearly', value:"year"}, ];
  public amount : number;
  public date : any;
  public interval : any;
  public rec : any;

  constructor(private router:Router, private service : DataService) { }

  ngOnInit() {
  }

  submit(){
    var data = { "isReccuring": this.rec, "interval": this.interval, "amount": this.amount,"startDate" : this.date}
    this.service.payout(data).subscribe((Response:any)=>{
      console.log(data);
      console.log(Response);
    })
  }

}
