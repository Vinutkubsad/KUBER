import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private router: Router) { }


  // resetForm(form?: NgForm) {
  //   if (form) form.reset();
  //   this.charityServices.slectedCharity = {
  //     _id: "",
  //     charityName: "",
  //     email: "",
  //     phoneNumber:null,
  //     description: "",
  //     address: "",
  //     city: "",
  //     state: "",
  //     zipcode: null,
  //     suggested: false
  //   };
  // }

  ngOnInit() {
  }




}
