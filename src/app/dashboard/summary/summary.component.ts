import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { database } from 'firebase';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class SummaryComponent implements OnInit {

  private page: number = 1;
  public payments: any = [];
  public searchResults: any[]
  public id;
  public DonarName;
  public pages: Array<number>;
  public amount: any;
  public userName: any;
  public date: any;
  public items: any;
  public pageSize: number;
  public flag: any = false;
  public bal:any;
  public mes:any;
  // public amt:0;


  public pagination = {
    currentPage: 1,
    noOfItemsPerPage: 10,
    ellipses: true,
    maxSize: 10,
    totalCount: 0
  }


  constructor(private service: DataService, private router: Router) { }
  setPage(i) {
    this.page = i;
    this.getReports();
  }

  ngOnInit() {
    this.getReports();
    this.balance();
  }
  doPagination(itemsPerPage, total_pages, totalCount, pageNo, per_page) {
    // console.log(this.pages, itemsPerPage, total_pages, totalCount, per_page);
    this.pagination.currentPage = parseInt(pageNo);
    this.pagination.noOfItemsPerPage = per_page;
    this.pagination.totalCount = totalCount;
  }

  onPageChange(e) {
    // console.log('onPageChange', e);
    this.setPage(e);
  }

  getReports() {
    this.service.getReportSummary(this.page, this.amount, this.date, this.userName).subscribe((Response: any) => {
      this.mes = Response.message;
      // console.log(Response,'res');
      if(Response.result){
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    }})
  }

  search() {
    var data = { "userName": this.DonarName }
    this.service.searchReport(data, this.page).subscribe((Response: any) => {
      // console.log(Response);
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    });
  }

  sortAmount() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.amount = -1;
      this.date = undefined;
      this.userName = undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.amount = 1;
      this.date = undefined;
      this.userName = undefined;
      this.getReports();
    }
  }



  sortDate() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.date = -1;
      this.amount = undefined;
      this.userName = undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.date = 1;
      this.amount = undefined;
      this.userName = undefined;
      this.getReports();
    }
  }

  sortName() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.userName = 1;
      this.amount = undefined;
      this.date = undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.userName = -1;
      this.amount = undefined;
      this.date = undefined;
      this.getReports();
    }
  }

  // balance(){
  //   this.service.balance().subscribe((Response:any)=>{
  //     console.log(Response);
  //     this.bal=Response.result.available;
      
  //   })
  // }
  balance(){
    this.service.getPdf().subscribe((Response:any)=>{
      // console.log(Response);
      var arr = Response.result;
      var sum = 0;
      for(let i = 0; i <arr.length; i++){
        var amount = Response.result[i].amount;
        sum += parseInt(Response.result[i].amount);          
      }
      // console.log(sum);
      this.bal = sum;
    })
  }
}
