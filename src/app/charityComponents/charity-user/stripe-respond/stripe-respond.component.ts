import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET, } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Url } from 'url';
import { Key } from 'protractor';
// import { HttpParams } from '@angular/common/http'

@Component({
  selector: 'app-stripe-respond',
  templateUrl: './stripe-respond.component.html',
  styleUrls: ['./stripe-respond.component.css']
})
export class StripeRespondComponent implements OnInit {

  public AccessCode;



  constructor(public service: DataService, public activatedRoute: ActivatedRoute, public router: Router) {
    // this.path = this.router.url;
    // console.log(this.path.split('=')[0], [1], '');

    this.activatedRoute.queryParams.subscribe((params)=> {
      // console.log(params['code']);
      this.AccessCode = params['code'];
      if(params){
        this.service.stipeDetail(this.AccessCode).subscribe((res)=>{
          // console.log(res);
        })
      }
    })

    // this.path.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    //   params[key] = value;
    // });
  }

  ngOnInit() {
  }

  // loadProject(id) {
  //   this.AccessCode = id;
  //   var data = { stripe_id: id };
  //   console.log("AccessCode", this.AccessCode);
  // }

// getParamValueQueryString( paramName ) {
//   const url = window.location.href;
//   let paramValue;
//   if (url.includes('?')) {
//     const httpParams = new httpParams({ fromString: url.split('?')[1] });
//     paramValue = httpParams.get(paramName);
//   }
//   return paramValue;
// }

  // navDash(stripe_Id) {
  //   this.service.stipeDetail(stripe_Id).subscribe((res)=>{
  //     console.log(res);
  //   })
  // }
}
