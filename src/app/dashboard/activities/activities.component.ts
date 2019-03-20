import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

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
  public bal : any;
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
    this.service.getReport(this.page, this.amount, this.date, this.status).subscribe((Response: any) => {
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
      this.status = undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.amount = 1;
      this.date = undefined;
      this.status = undefined;
      this.getReports();
    }
  }



  sortDate() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.date = -1;
      this.amount = undefined;
      this.status = undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.date = 1;
      this.amount = undefined;
      this.status = undefined;
      this.getReports();
    }
  }

  sortStatus() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.status = -1;
      this.amount = undefined;
      this.date = undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.status = 1;
      this.amount = undefined;
      this.date = undefined;
      this.getReports();
    }
  }
  
}

