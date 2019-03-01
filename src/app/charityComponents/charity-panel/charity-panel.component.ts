import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-charity-panel',
  templateUrl: './charity-panel.component.html',
  styleUrls: ['./charity-panel.component.css']
})
export class CharityPanelComponent implements OnInit {

  public data;
  public id:any;
  public userName:any;
  public page;
  

  constructor( private rout:Router, private service:DataService ) { }

  ngOnInit() {
  }


  payments(){
    // console.log(_id);
    this.rout.navigate(["paymentreport"]);
  //  this.service.getReport(this.id).subscribe((response:any)=>{
  //   console.log(response);
  // });
  }
}
