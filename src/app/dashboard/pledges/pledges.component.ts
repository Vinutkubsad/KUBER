import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
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
  public searchResult: any;
  userFilter: string;
  pdf: any;
  p: number = 1;
  data = [];
  start;
  end;
  mes;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.service.allPledges().subscribe((Response: any) => {
        this.pledgeReport = Response.data;
        this.pledgeReport1 = Response.data;
    }
    );
  }

  refresh(){
    window.location.reload();
  }

  createPdfTable(data) {
    var tempArr = [];
    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        var ar = ["Name", "Amount", "Interval", "paymentModeId", "Date"];
        tempArr.push(ar);
      }
      var arr = [
        data[i].userDetails.Name ? data[i].userDetails.Name : " ",
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
    if(this.pledgeReport.length === 0){
    }
  }

  Datefilter() {
    {
      var startDate = this.start;
      var endDate = this.end;
      this.pledgeReport = this.pledgeReport1.filter(
        x => x.startDate >= startDate && x.startDate <= endDate
      );
      if(this.pledgeReport.length === 0){
      }
    }
  }
}
