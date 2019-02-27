import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

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
  private amount: any = true;
  private status: any = true;
  private date: any = true;


  constructor(private service: DataService, private router: Router) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getReports();
  }

  ngOnInit() {
    this.getReports();
  }

  logout(){
    this.router.navigate(['/home']);
  }

  getReports() {

    this.service.getReport(this.page).subscribe((Response: any) => {
      console.log(Response);
      this.payments = Response.result.paginatedItems;
      this.pages = new Array(Response.result.total_pages);
    })
  }
  search() {
    var data = { "userName": this.DonarName }
    this.service.searchReport(data).subscribe((response: any) => {
      console.log(response);
      this.payments = response.result.paginatedItems;
      this.pages = new Array(response.result.total_pages);
    });
  }

  sortAmount() {
    this.amount = !this.amount;
    let sortAmount;
    if (this.amount === true) {
      sortAmount = 1;
    } else 
      sortAmount = -1;
    console.log(this.amount);
    this.service.sortAmount(this.page, sortAmount).subscribe((response: any) => {
      console.log(response);
      this.payments = response.result.paginatedItems;
      this.pages = new Array(response.result.total_pages);
    })
  }

  sortDate() {
    this.date =! this.date;
    let sortDate;
    if(this.date === true){
      sortDate = 1;
    } else sortDate = -1;
    this.service.sortDate(this.page, sortDate).subscribe((response: any) => {
      console.log(response);
      this.payments = response.result.paginatedItems;
      this.pages = new Array(response.result.total_pages);
    });
  }

  sortStatus() {
    this.status =! this.status;
    let sortStatus;
    if(this.status === true){
      sortStatus = 1;
    } else sortStatus = -1;
    this.service.sortStatus(this.page, sortStatus).subscribe((response: any) => {
      console.log(response);
      this.payments = response.result.paginatedItems;
      this.pages = new Array(response.result.total_pages);
    });
  }

 

}
