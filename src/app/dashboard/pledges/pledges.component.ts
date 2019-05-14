import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { Router } from "@angular/router";
import { concatMap, timeout, catchError, delay } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, FormGroupDirective } from "@angular/forms";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import swal from "sweetalert";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { of } from 'rxjs';

@Component({
  selector: "app-pledges",
  templateUrl: "./pledges.component.html",
  styleUrls: ["./pledges.component.css"]
})
export class PledgesComponent implements OnInit {
  faFilePdf = faFilePdf;
  faRedoAlt = faRedoAlt;
  faSearch = faSearch;
  faFilter = faFilter;

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
  loading: boolean;
  amount;
  logout= false;
  timer;
  tempPledge;

  constructor(private service: DataService,  private router: Router, public fb: FormBuilder ) {
    setTimeout(() => {
      this.logout = true;
    }, 2000);
   }

  ngOnInit() {
    this.getReports();
  }

  getReports() {
    this.loading = true;
    this.service.allPledges().pipe(timeout(10000),catchError(e=>{this.logout1(); return of(null)})).subscribe((Response: any) => {
        this.loading = false;
        this.pledgeReport = Response.data;
        this.pledgeReport1 = Response.data;
        this.tempPledge=Response.data;
        console.log(this.pledgeReport);
    });
  }

  logout1(){
    this.router.navigate(["home"]);
    localStorage.removeItem("jwt");
    localStorage.removeItem("randid");
    localStorage.removeItem("user");
  }

  refresh() {
    this.getReports();
    window.location.reload();
  }
  hello
  createPdfTable(data) {
    var tempArr = [];
    for (let i = 0; i < data.length; i++) {
      if (i == 0) {
        var ar = ["Name", "Amount", "Interval", "Date"];
        tempArr.push(ar);
      }
      var arr = [
        data[i].userDetails.Name ? data[i].userDetails.Name : " ",
        data[i].amount,
        data[i].interval,
        // data[i].paymentModeId,
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
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],
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
    console.log(event);
    
    if(event == 'allData'){
      this.pledgeReport=this.tempPledge;
    }
    else{
      this.pledgeReport = this.pledgeReport1.filter(x => x.interval == event);
    }
  }

  Datefilter() {
    {
      var startDate = new Date;
      var start = this.start;
      var endDate = this.end;
      this.pledgeReport = this.pledgeReport1.filter( m => {
        if(m.startDate > this.start && m.startDate < this.end)
        return m;
      });
      console.log(this.pledgeReport,'date');
    }
  }

  onChangeDate(event, field) {
    console.log("onChnage-->",event);
  }
}
