import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service'
import swal from 'sweetalert';




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
      state: [null, [Validators.required]]
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
      suggested: false
    };
  }

  submitForm() {
    // console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.charityServices
        .postCharty(this.registerForm.value)
        .subscribe(res => {
          console.log(res);
          if (res) {
            swal("Succefully Added", "success");
            this.registerForm.reset();
          } else {
            swal("Something is missing", "Error");
          }
        });
    } else {
      swal("Please enter valid data", "");
    }
  }

  navigateLogin() {
    this.router.navigate(['signup']);
  }

}


