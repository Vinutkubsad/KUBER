import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-charity-panel',
  templateUrl: './charity-panel.component.html',
  styleUrls: ['./charity-panel.component.css']
})
export class CharityPanelComponent implements OnInit {

  public id:any;

  constructor( private rout:Router, private service:DataService ) { }

  ngOnInit() {
  }
  payments(){

    var data = { 'charityId':this.id }
    this.service.getReport(data).subscribe((res:any)=>{
      console.log(res)
    });
    this.rout.navigate(["paymentreport"]);

    
  }
}
