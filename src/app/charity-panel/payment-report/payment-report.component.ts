import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-payment-report',
  templateUrl: './payment-report.component.html',
  styleUrls: ['./payment-report.component.css']
})
export class PaymentReportComponent implements OnInit {

  private page: number=1;
  public payments: any[];
  public searchResults: any[]
  public id;
  public DonarName;
  public pages: Array<number>;
  public amount = {
    
  }
  public status: any ;
  public date: any ;
  public items: any;
  public pageSize: number;

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
    // this.sortAmount();
  }

  ngOnInit() {
    this.getReports();
  }
  doPagination( itemsPerPage, total_pages, totalCount, pageNo, per_page) {
    console.log(this.pages,itemsPerPage, total_pages, totalCount,per_page);
    this.pagination.currentPage = parseInt(pageNo);
    this.pagination.noOfItemsPerPage = per_page;
    this.pagination.totalCount = totalCount;
  }

  onPageChange(e) {
    console.log('onPageChange', e );
    this.setPage(e);
  }

  getReports() {
    this.service.getReport(this.page).subscribe((Response: any) => {
      console.log(Response);
      this.payments = Response.result.paginatedItems;
       this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
      })
  }
  search() {
    var data = { "userName": this.DonarName }
    this.service.searchReport(data).subscribe((Response: any) => {
      console.log(Response);
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    });
  }

  sortAmount() {

    this.amount = !this.amount;
    let sortAmount;
    if (this.amount === true) {
      sortAmount = 1;
    } else 
      sortAmount = -1;
    this.service.sortAmount(this.page, sortAmount).subscribe((response: any) => {
      this.payments = response.result.paginatedItems;
      this.doPagination(response.result.itemsPerPage, response.result.total_pages, response.result.totalCount, response.result.pageNo,response.result.per_page)
    })
  }



  sortDate() {
    this.date =! this.date;
    let sortDate;
    if(this.date === true){
      sortDate = 1;
    } else sortDate = -1;
    this.service.sortDate(this.page, sortDate).subscribe((response: any) => {
      this.payments = response.result.paginatedItems;
      this.doPagination(response.result.itemsPerPage, response.result.total_pages, response.result.totalCount, response.result.pageNo, response.result.per_page)
    });
  }

  sortStatus() {
    this.status =! this.status;
    let sortStatus;
    if(this.status === true){
      sortStatus = 1;
    } else sortStatus = -1;
    this.service.sortStatus(this.page, sortStatus).subscribe((Response: any) => {
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    });
  }
   logout(){
    this.router.navigate(['/home']);
  }
  sort(){
    this.service.sort(this.page,this.amount,this.date,this.status).subscribe((res:any)=>{
      console.log(res);
      this.payments = res.result.paginatedItems;
      
    })
  }
}
