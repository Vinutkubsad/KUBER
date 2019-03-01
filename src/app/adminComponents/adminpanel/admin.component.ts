import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public charityResult: any[];
  constructor( public service: DataService, public router: Router) { }
 
  ngOnInit() {
    this.getCharitydetails();
  }
 
  getCharitydetails() {
    this.service.getCharitydetails().subscribe((res:any) => {
      console.log(res);
      this.charityResult = res.result.paginatedItems;
    })
  }
  ApproveCharity(_id){
    console.log(_id);
    var data={"approved": true,"id":_id};
    this.service.approveCharity(data).subscribe((res)=>{
      if(res){
        alert("Charity Approved")
        this.refresh();
      }
      else{
        alert("CouldNot approved")
      }
    })
  }

  refresh(){
    window.location.reload();
  }

}
