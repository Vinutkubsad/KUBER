import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent implements OnInit {

  private page: number = 1;
  public payments: any[];
  public searchResults: any[]
  public id;
  public DonarName;
  public pages: Array<number>;


  constructor(private service: DataService, private rout: Router) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getReports();

  }

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.service.getReport(this.page).subscribe((response: any) => {
      console.log(response);
      this.payments = response.result.paginatedItems;
      this.pages = new Array(response.result.total_pages);
    });
  }
  search() {
    var data = { "userName": this.DonarName }
    this.service.searchReport(data).subscribe((response: any) => {
      console.log(response);
      this.searchResults = response.result;
    });
  }
}
