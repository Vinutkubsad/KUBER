import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, Params, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET, } from '@angular/router';
import swal from 'sweetalert';
import { concatMap, timeout, catchError, delay } from 'rxjs/operators';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers: [
    { provide: 'Window',  useValue: window }
  ]
})
export class SummaryComponent implements OnInit {
  faSort = faSort;

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
  message;
  // public amt:0;
  loading:boolean
  public AccessCode;


  public pagination = {
    currentPage: 1,
    noOfItemsPerPage: 10,
    ellipses: true,
    maxSize: 10,
    totalCount: 0
  }


  constructor(private service: DataService, private router: Router, public activatedRoute: ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe((params)=> {
      // console.log(params['code']);
      this.AccessCode = params['code'];
      if(params){
        this.service.stipeDetail(this.AccessCode).subscribe((res: any)=>{
          if(res.success) {
            swal("","Successfully added your account!","success")
          }
        })
      }
    });
   }
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
    this.loading = true;
    this.service.getReportSummary(this.page, this.amount, this.date, this.userName).pipe(timeout(6000),catchError(e=>{this.logout1(); return null})).subscribe((Response: any) => {
      // console.log(Response);
      this.loading = false;
      this.mes = Response.message;
      // console.log(Response,'res');
      if(Response.success == true){
      this.payments = Response.result.paginatedItems;
      this.doPagination(Response.result.itemsPerPage, Response.result.total_pages, Response.result.totalCount, Response.result.pageNo, Response.result.per_page)
    }
  else if(Response.success == false){
    this.payments = Response;
  }})
  }

  logout1(){
    this.router.navigate(["home"]);
    localStorage.removeItem("jwt");
    localStorage.removeItem("randid");
    localStorage.removeItem("user");
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
      this.date = 1;
      this.amount = undefined;
      this.userName = undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.date = -1;
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
