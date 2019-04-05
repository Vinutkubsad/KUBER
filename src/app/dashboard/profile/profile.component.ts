import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router'
import { DataService } from 'src/app/services/data.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public id;
  public firstname;
  public lastname;
  public primarynumber;
  public email;
  public address;
  public searchText: any;

  constructor(public router: ActivatedRoute, public service: DataService) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.loadProject(params.id);
    })
  }
  loadProject(id) {
    this.id = id;
    var data = { "Course_ID": id };
    this.service.getCharityById(id).subscribe((res => {
      this.firstname = res['result'].firstName;
      this.lastname = res['result'].lastName;
      this.primarynumber = res['result'].phoneNumber;
      this.email = res['result'].userEmail;
      this.address = res['result'].userAddress;
    }))
  }

  updateProfile() {
    var data = { 'firstName':this.firstname, 
    'lastName': this.lastname, 'phoneNumber': this.primarynumber, 
    'userEmail': this.email, 'userAddress': this.address}
    this.service.editProfile(data,this.id).subscribe((res) =>{
      if(res['message'] == 'Updated Successfuly') {
        swal("updated successfully");
      }else {
        swal( 'Error', 'warning')
      }
    });
  }
}


