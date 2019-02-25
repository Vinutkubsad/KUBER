import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute,Params, Router } from '@angular/router';


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
  

  constructor(private router:ActivatedRoute,private service: DataService, private rout: Router) { }

  ngOnInit() {
    this.service.getReport().subscribe((response:any)=>{
      console.log(response);
      this.payments = response.result;
    })
  }

  logout() {
    this.rout.navigate(['charityUser/signin'])
  }
}
