import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
// import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor( public service: DataService) { }

  ngOnInit() {
    this.reportDetails();
    }

  reportDetails() {
    this.service.charityReport().subscribe((res) => {
      console.log(res)
    })
  }
}

