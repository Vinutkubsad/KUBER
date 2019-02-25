import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
// import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent implements OnInit {

  private page =1;
  private limit =10;
  p: number = 1;
  public payments: any[];
  public id;
  

  constructor(private service: DataService, private rout: Router) { }

  ngOnInit() {
    this.service.getReport().subscribe((response:any)=>{
      console.log(response);
      this.payments = response.result;
    })
  }
}
