import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

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
  public bal : any= [];
  public mes:any;

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
    console.log(this.pages, itemsPerPage, total_pages, totalCount, per_page);
    this.pagination.currentPage = parseInt(pageNo);
    this.pagination.noOfItemsPerPage = per_page;
    this.pagination.totalCount = totalCount;
  }

  onPageChange(e) {
    console.log('onPageChange', e);
    this.setPage(e);
  }

  getReports() {
    this.service.getReportSummary(this.page, this.amount, this.date, this.userName).subscribe((Response: any) => {
      console.log(Response);
     
      this.mes = Response.message;
      if(Response.result){
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    }})
  }

  search() {
    var data = { "userName": this.DonarName }
    this.service.searchReport(data, this.page).subscribe((Response: any) => {
      console.log(Response);
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

  sortStatus() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.userName = -1;
      this.amount = undefined;
      this.date = undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.userName = 1;
      this.amount = undefined;
      this.date = undefined;
      this.getReports();
    }
  }

  balance(){
    this.service.balance().subscribe((Response:any)=>{
      console.log(Response);
      this.bal=Response.result.available;
      
    })
  }
  download(){
    var doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');
       doc.text(20,20,'getReports') 
        // Save the PDF
        doc.save('Test.pdf');
  }
}
