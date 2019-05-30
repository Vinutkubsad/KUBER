import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import swal from 'sweetalert';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-payouts',
  templateUrl: './payouts.component.html',
  styleUrls: ['./payouts.component.css']
})
export class PayoutsComponent implements OnInit {

  public error;
  public reccuring: any = [{ name: 'Yes', value: '1' }, { name: 'No', value: '0' }];
  public intervals: any = [{ name: 'Weekly', value: 'week' }, { name: 'Biweekly', value: 'byweek' }, { name: 'Monthly', value: 'month' }, { name: 'Quarterly', value: 'quarter' }, { name: 'Half-yearly', value: 'half-year' }, { name: 'Yearly', value: "year" },];
  public amount: number;
  public date: any;
  public interval: any;
  public rec: any;
  filter = false;

  constructor(private router: Router, private service: DataService) { }

  ngOnInit() {
  }


  onFilterChange(eve: any) {
    this.filter = !this.filter;
  }

  submit() {

    var data = { "isReccuring": this.filter, "interval": this.interval, "amount": this.amount, "startDate": this.date }
    // console.log(data);
    this.service.payout(data).subscribe((Response: any) => {
      // console.log(Response); 
      if (Response.success) {
        swal("Great!", `Payout is set`, "success");
        this.filter = null;
        this.interval = null;
        this.date = null;
        this.amount = null;
      }
    },
      (err) => {
        // console.log(err,'err');
        this.error = err.error;

      });
  }

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  // constructor(calendar: NgbCalendar) {
  //   this.fromDate = calendar.getToday();
  //   this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  // }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    //   }

  }
}
