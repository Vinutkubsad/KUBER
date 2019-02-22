import { Component, OnInit } from '@angular/core';
// import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent implements OnInit {

  p: number = 1;
  payments: any[] = [
    { Date:'20 feb 2019', DonarName:'name1', CharityName:'charityname1', email:'email1@123', amount:'10', status:'pending' },
    { Date:'18 feb 2019', DonarName:'name2', CharityName:'charityname12', email:'email2@gmail', amount:'20', status:'succeeded' },
    { Date:'19 feb 2019', DonarName:'name3', CharityName:'charityname4', email:'email1@face.com', amount:'310', status:'pending' },
    { Date:'2 feb 2019', DonarName:'name4', CharityName:'charityname5', email:'email@accion', amount:'105', status:'succeeded' },
    { Date:'20 feb 2019', DonarName:'name4', CharityName:'charityname6', email:'email@accion', amount:'105', status:'succeeded' },
    { Date:'16 jan 2019', DonarName:'name4', CharityName:'charityname7', email:'email@accion', amount:'105', status:'succeeded' },
    { Date:'12 jan 2019', DonarName:'name4', CharityName:'charityname8', email:'email@accion', amount:'105', status:'succeeded' },
    { Date:'2 jan 2019', DonarName:'name4', CharityName:'charityname9', email:'email@accion', amount:'105', status:'succeeded' }
  ]; 
  
  constructor() { }

  ngOnInit() {
  }
    
}
