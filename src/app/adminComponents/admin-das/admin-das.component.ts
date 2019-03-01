import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-das',
  templateUrl: './admin-das.component.html',
  styleUrls: ['./admin-das.component.css']
})
export class AdminDasComponent implements OnInit {

  public charityResult: any[];
 
  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
    this.getCharitydetails();
  }

  getCharitydetails() {
    this.service.getCharitydetails().subscribe((res:any) => {
      console.log(res);
      this.charityResult = res.result.paginatedItems;
    })
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
