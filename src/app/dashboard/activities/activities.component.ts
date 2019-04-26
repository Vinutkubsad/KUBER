import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';


import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  faFilePdf = faFilePdf;
  faRedoAlt = faRedoAlt;
  faSearch = faSearch;
  faFilter = faFilter;

  public pdf:any;
  private page: number = 1;
  public payments: any = [];
  public searchResults: any[]
  public id;
  public DonarName;
  public pages: Array<number>;
  public amount: any;
  public status: any;
  public date: any;
  public pageSize: number;
  public flag: any = false;
  public bal: any;
  public mes: any;
  public start: any;
  public end: any;
  public userName: any;
  public net : any;
  public application_fee_amount:any;
  public days: any;
  public year: any; 
  public from : any;
  public to : any;
  loading:boolean


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
    this.getStatus();
   
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
  
  refresh(){
    this.getStatus();
    window.location.reload();
    
  }

  getReports() {
    this.loading = true;
    this.service.getReport(this.page, this.amount, this.date, this.userName,this.status,  this.net,this.application_fee_amount,this.days,this.year,this.from,this.to).subscribe((Response: any) => {
      this.loading = false;
      if (Response.success== true) {
        console.log(Response);
        
        this.payments = Response.result.paginatedItems;
        this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
      }
       else if(Response.success == false) {
        this.payments = Response;
       }  
    });
  }
  getStatus(){
    this.service.getStatus().subscribe((Response:any)=>{
      // console.log(Response); 
    })
  }
  search(){
    this.userName = this.DonarName;
    this.days = undefined;
    this.year = undefined;
    this.from = undefined;
    this.to = undefined;
    console.log(this.DonarName);
    this.getReports();
  }

  sortAmount() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.amount = -1;
      this.date = undefined;
      this.status = undefined;
      this.net = undefined;
      this.userName = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.amount = 1;
      this.date = undefined;
      this.status = undefined;
      this.net = undefined;
      this.userName = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    }
  }

  sortDate() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.date = 1;
      this.amount = undefined;
      this.status = undefined;
      this.net = undefined;
      this.userName = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.date = -1;
      this.amount = undefined;
      this.status = undefined;
      this.net = undefined;
      this.userName = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    }
  }

  sortStatus() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.status = undefined;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName = 1;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.status = undefined;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName = -1;
      this.application_fee_amount= undefined;
      this.getReports();
    }
  }
  sortName() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.status = 1;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName =  undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.status = -1;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName =  undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    }
  }
  sortNet() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.status = undefined;
      this.amount = undefined;
      this.date = undefined;
      this.net = -1;
      this.userName = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.status = undefined;
      this.amount = undefined;
      this.date = undefined;
      this.net = 1;
      this.userName = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    }
  }
  sortAppfee() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.status = undefined;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName = undefined;
      this.application_fee_amount= -1;
      this.getReports();
    } else if (this.flag === false) {
      this.status = undefined;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName = undefined;
      this.application_fee_amount= 1;
      this.getReports();
    }
  }

  filter30(){
    this.days = 30;
    this.year = undefined;
    this.from = undefined;
    this.to = undefined;
    this.userName = undefined;
    this.getReports();
  }

  filter60(){
    this.days = 60;
    this.year = undefined;
    this.from = undefined;
    this.to = undefined;
    this.userName = undefined;
    this.getReports();
  }
  
  filter18(){
    this.year = 2018;
    this.days = undefined;
    this.from = undefined;
    this.to = undefined;
    this.userName = undefined;
    // console.log(this.year);
    
    this.getReports();
  }

  filter19(){
    this.year = 2019;
    this.days = undefined;
    this.from = undefined;
    this.to = undefined;
    this.userName = undefined;
    this.getReports();
  }

  filter(){
    this.from = this.start;
    this.to = this.end;
    this.days = undefined;
    this.year = undefined;
    this.userName = undefined;
    // console.log(this.start,this.end); 
    this.getReports();
  }

  checkStatus(payment_id){
   this.id = payment_id;
  //  console.log(this.id);
  //  console.log(payment_id);
   
    this.service.getSingleStatus(this.id).subscribe((Response:any)=>{
      // console.log(Response);
      this.getReports();
    });
   
  }

  createPdfTable(result) {
    var tempArr = [];
    for(let i = 0; i<result.length; i++){

     
      if(i == 0) { 
        var ar = ['Date', 'Name', 'Donation Status', 'Total Amount'];
        tempArr.push(ar);
      }
      var arr = [(result[i].paymentDate ? result[i].paymentDate : ' '), result[i].userName, result[i].status, result[i].amount];
      tempArr.push(arr);
    }
    return tempArr;
  }
  

  createPdfDoc(result) {
    const doc = {
      content: [
        {
          style: 'tableExample',
          table: {
            body: this.createPdfTable(result)
          }
        }
      ]
  }
    return doc;
  }

  downloadPdf() {
    this.service.getPdf().subscribe((Response: any) => {
      // console.log(Response);
      var doc = this.createPdfDoc(Response.result);
      // console.log('DOc Pdf', doc);
      pdfMake.createPdf(doc).download();
    })
  }
}