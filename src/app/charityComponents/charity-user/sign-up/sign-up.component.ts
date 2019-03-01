import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;



  constructor( private router: Router, private fb: FormBuilder, public charityServices: DataService) { }

  ngOnInit(): void {
    this.resetForm();
    this.registerForm = this.fb.group({
      charityName: [null, [Validators.required]],
      description: [null, [Validators.required]],
      email: [null,  [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phoneNumber: [null,[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: [null, [Validators.required]],
      zipcode: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      country: [null,[Validators.required]],
      charityLogos: [null],
    });
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.charityServices.selectedCharity = {
      _id: "",
      charityName: "",
      email: "",
      phoneNumber:null,
      description: "",
      address: "",
      city: "",
      state: "",
      zipcode: null,
      suggested: false,
      country: "",
      charityLogos: null
    };
  }

  submitForm() {
    if (this.registerForm.valid) {
      this.charityServices
        .postCharty(this.registerForm.value)
        .subscribe((res) => {
          if (res) {
            swal("Succefully Added", "success");
            this.registerForm.reset();
          } else {
            swal("Email is already registerd", "Error");
          }
        })
    } else {
      swal("Please enter valid data", "");
    }
  }

  

  navigateLogin() {
    this.router.navigate(['signup']);
  }

}


