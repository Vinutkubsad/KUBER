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
    this.activatedRoute.queryParams.subscribe((params)=> {
      // console.log(params['code']);
      
      if(params){
        this.AccessCode = params['code'];
        this.service.stipeDetail(this.AccessCode).subscribe((res)=>{
          // console.log(res);
        })
      }
    });

    // this.path.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    //   params[key] = value;
    // });
  }

  ngOnInit() {
  }
}
