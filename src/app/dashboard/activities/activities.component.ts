import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

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
  public items: any;
  public pageSize: number;
  public flag: any = false;
  public bal: any;
  public mes: any;
  public day: number;
  public start: any;
  public end: any;
  public userName: any;
  public net : any;
  public application_fee_amount:any;


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
  
  refresh(){
    window.location.reload();
  }

  getReports() {
    this.service.getReport(this.page, this.amount, this.date, this.status, this.userName, this.net,this.application_fee_amount).subscribe((Response: any) => {
      console.log(Response);

      this.mes = Response.message;
      if (Response.result) {
        this.payments = Response.result.paginatedItems;
        this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
      }
      
    })
  }

  search() {
    var data = { "userName": this.DonarName }
    this.service.searchReport(data, this.page).subscribe((Response: any) => {
      console.log(Response);
      this.mes = Response.message;
      if(Response.success){
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
      }
    },
    (err)=>
    {
      console.log(err,'err');
      this.payments = Response.error;
    });
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
      this.date = -1;
      this.amount = undefined;
      this.status = undefined;
      this.net = undefined;
      this.userName = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.date = 1;
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
      this.status = 1;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.status = -1;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    }
  }
  sortName() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.status = undefined;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName = -1;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.status = undefined;
      this.amount = undefined;
      this.date = undefined;
      this.net = undefined;
      this.userName = 1;
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

  filter30() {
    var data = { "days": 30 }
    this.service.dateFilterActivity(data).subscribe((Response: any) => {
      console.log(Response);
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    },
    (err)=>
    {
      console.log(err,'err');
      this.payments = Response.error;
    });
  }

  filter60() {
    var data = { "days": 60 }
    this.service.dateFilterActivity(data).subscribe((Response: any) => {
      console.log(Response);
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    },
    (err)=>
    {
      console.log(err,'err');
      this.payments = Response.error;
    });
  }

  filter18() {
    var data = { "year": 2018 }
    this.service.dateFilterActivity(data).subscribe((Response: any) => {
      console.log(Response);
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    },
    (err)=>
    {
      console.log(err,'err');
      this.payments = Response.error;
    });
  }
  filter19() {
    var data = { "year": 2019 }
    this.service.dateFilterActivity(data).subscribe((Response: any) => {
      console.log(Response);
     
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    },
    (err)=>
    {
      console.log(err,'err');
      this.payments = Response.error;
    });
  }
  filter() {
    var data = { range: { "from": this.start, "to": this.end } }
    this.service.dateFilterActivity(data).subscribe((Response: any) => {
      console.log(Response);
      if(Response.success ){
        this.payments = Response.result.paginatedItems;
        this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
      } 
    },
    (err)=>
    {
      console.log(err,'err');
      this.payments = Response.error;
    });
  }

  
  createPdfTable(result) {
    var tempArr = [];
    for(let i = 0; i<result.length; i++){

      // this.data.push(Response.data[i]);
      if(i == 0) {
        var ar = ['Date', 'Name', 'Donation Status', 'Total Amount', 'Fee', 'Net Amount'];
        tempArr.push(ar);
      }
      var arr = [(result[i].paymentDate ? result[i].paymentDate : ' '), result[i].userName, result[i].status, result[i].amount, result[i].application_fee_amount,result[i].net];
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
      console.log(Response);
      
      var doc = this.createPdfDoc(Response.result);
      // console.log('DOc Pdf', doc);
      pdfMake.createPdf(doc).download();
    })
  }
}