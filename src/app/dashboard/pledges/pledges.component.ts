import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
// import * as jspdf from 'jspdf'; 
// import html2canvas from 'html2canvas';  
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { from } from 'rxjs';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



// import * as moment from 'moment';

@Component({
  selector: "app-pledges",
  templateUrl: "./pledges.component.html",
  styleUrls: ["./pledges.component.css"]
})
export class PledgesComponent implements OnInit {
  public pledgeReport: any[];
  userFilter: string
  pdf: any;
  p: number = 1;
  data =[];


  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.service.allPledges().subscribe((Response: any) => {
      console.log(Response)
      this.pledgeReport = Response.data;
      // console.log(Response.data[0].amount);
      var tempArr = [];
      for(let i = 0; i<Response.data.length; i++){

        // this.data.push(Response.data[i]);
        tempArr.push({
          name: Response.data[i].userDetails.Name,
          amount: Response.data[i].amount,
          interval:Response.data[i].interval,
          paymentModeId:Response.data[i].paymentModeId,
          data:Response.data[i].startDate
        }); 
      }
      console.log(tempArr);
      return tempArr;
    });
  }
  

  createPdfTable(data) {
    var tempArr = [];
    for(let i = 0; i<data.length; i++){

      // this.data.push(Response.data[i]);
      if(i == 0) {
        var ar = ['Name', 'Amount', 'Interval', 'paymentModeId', 'Date'];
        tempArr.push(ar);
      }
      var arr = [(data[i].userDetails.Name ? data[i].userDetails.Name : ' '), data[i].amount, data[i].interval, data[i].paymentModeId, data[i].startDate];
      tempArr.push(arr);
    }
    return tempArr;
  }
  

  createPdfDoc(data) {
    const doc = {
      content: [
        {
          style: 'tabl  eExample',
          table: {
            body: this.createPdfTable(data)
          }
        }
      ]
  }
    return doc;
  }

  downloadPdf() {
    this.pdf = pdfMake;
    this.service.allPledges().subscribe((Response: any) => {
      var doc = this.createPdfDoc(Response.data);
      // console.log('DOc Pdf', doc);
      pdfMake.createPdf(doc).download();
    });
    
  }

   // nextMonth(){
  //   var data = moment().add(1, 'months');
  //   this.service.allPledges().subscribe((Response:any)=>{
  //     this.pledges = Response.data;
  //     console.log(data);
  //   })
  // }

}
