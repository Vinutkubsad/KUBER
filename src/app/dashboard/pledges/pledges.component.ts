import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, FormGroupDirective } from '@angular/forms';
// import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import swal from 'sweetalert';


// import * as moment from 'moment';

@Component({
  selector: "app-pledges",
  templateUrl: "./pledges.component.html",
  styleUrls: ["./pledges.component.css"]
})
export class PledgesComponent implements OnInit {

  public pledgeReport: any[];
  public pledgeReport1: any[];
  public searchText: string;
  userFilter: string;
  pdf: any;
  p: number = 1;
  data = [];
  start;
  end; 
  mes;
  

  private page: number = 1;
  public payments: any = [];
  public searchResults: any[]
  public id;
  public DonarName;
  public pages: Array<number>;
  public amount: any;
  public status: any;
  public startDate: any;
  public items: any;
  public pageSize: number;
  public flag: any = false;
  public bal: any;
  public day: number;
  public userName: any;
  public net : any;
  public application_fee_amount:any;
  spinner: boolean;

  constructor(private service: DataService, private router: Router, public fb: FormBuilder) {}

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.spinner = true;
    this.service.allPledges().subscribe((Response: any) => {
        this.pledgeReport = Response.data;
        this.pledgeReport1 = Response.data;
    }
    );
  }

  refresh(){
    location.reload();
  }

  createPdfTable(data) {
    var tempArr = [];
    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        var ar = ["name", "Amount", "Interval", "paymentModeId", "Date"];
        tempArr.push(ar);
      }
      var arr = [
        data[i].userDetails.name ? data[i].userDetails.name : " ",
        data[i].amount,
        data[i].interval,
        data[i].paymentModeId,
        data[i].startDate
      ];
      tempArr.push(arr);
    }
    return tempArr;
  }

  createPdfDoc(data) {
    const doc = {
      content: [
        {
          style: "tabl  eExample",
          table: {
            body: this.createPdfTable(data)
          }
        }
      ]
    };
    return doc;
  }

  downloadPdf() {
    this.pdf = pdfMake;
    this.service.allPledges().subscribe((Response: any) => {
      var doc = this.createPdfDoc(Response.data);
      pdfMake.createPdf(doc).download();
    });
  }

  frequnecy(event) {
    this.pledgeReport = this.pledgeReport1.filter(x => x.interval == event);
  }

  Datefilter() {
    {
      var startDate = this.start;
      var endDate = this.end;
      this.pledgeReport = this.pledgeReport1.filter(
        x => x.startDate >= startDate && x.startDate <= endDate
      );
    }
  }

  // sort
  sortDate() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.startDate = -1;
      this.amount = undefined;
      this.status = undefined;
      this.net = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.startDate = 1;
      this.amount = undefined;
      this.status = undefined;
      this.net = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    }
  }

  sortAmount() {
    this.flag = !this.flag;
    if (this.flag === true) {
      this.amount = -1;
      this.startDate = undefined;
      this.status = undefined;
      this.net = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    } else if (this.flag === false) {
      this.amount = 1;
      this.startDate = undefined;
      this.status = undefined;
      this.net = undefined;
      this.application_fee_amount= undefined;
      this.getReports();
    }
  }

}
