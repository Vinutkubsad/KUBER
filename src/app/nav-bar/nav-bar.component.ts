import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public page;
  public payments: any;
  // public pages: Array<number>;
  public amount: any;
  public status: any;
  public date: any;
  public length : number;

  constructor(private service: DataService, private router: Router) { }
  // setPage(i) {
  //   this.page = i;
  //   this.getReports();
  // }

  ngOnInit() {
    // this.getReports();
  }
  // doPagination(itemsPerPage, total_pages, totalCount, pageNo, per_page) {
  //   console.log(this.pages, itemsPerPage, total_pages, totalCount, per_page);
  //   this.pagination.currentPage = parseInt(pageNo);
  //   this.pagination.noOfItemsPerPage = per_page;
  //   this.pagination.totalCount = totalCount;
  // }

  // onPageChange(e) {
  //   // console.log('onPageChange', e);
  //   this.setPage(e);
  // }

  // getReports() {
  //   this.service.getReport(this.page, this.amount, this.date, this.status).subscribe((Response: any) => {
  //     console.log(Response);
  //     this.length = Response.result.paginatedItems.length;
  //     this.payments =  Response.result.page;
  //     this.payments = Response.result.paginatedItems;
  //     this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
  //   })
  // }


  summary(){
    this.router.navigate(['dashboard/summary']);
  }
  activities(){
    this.router.navigate(['dashboard/activities']);
  }
  pledges(){
    this.router.navigate(['dashboard/pledges']);
  }
  help(){
    this.router.navigate(['dashboard/help']);
  }

  payouts(){
    this.router.navigate(['dashboard/payout']);
  }
  navProfile() {
    var id=localStorage.getItem('user');
    console.log(id);
    this.router.navigate(['dashboard/profile/',id]);
  }
  logout(){
    this.router.navigate(['home']);
    localStorage.removeItem('jwt');
    localStorage.removeItem('randid');
    localStorage.removeItem('user');
  }
}
