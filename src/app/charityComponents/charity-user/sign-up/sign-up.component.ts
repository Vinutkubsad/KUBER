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
  // charityLogoFile: any;
  charityLogoFile: File = null;
  
  charityLogos(event){
    // console.log(event.target.files);
    this.charityLogoFile = event.target.files[0];
  }

  constructor( private router: Router, private fb: FormBuilder, public charityServices: DataService) { }

  ngOnInit(): void {
    this.resetForm();
    this.registerForm = this.fb.group({
      charityName: [null, [Validators.required]],
      description: [null, [Validators.required]],
      email: [null,  [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phoneNumber: [null,[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: [null, [Validators.required]],
      zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      country: [null,[Validators.required]],
      charityLogos: [null]
    });
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.charityServices.selectedCharity = {
      _id: "",
      charityLogos: null,
      charityName: "",
      email: "",
      phoneNumber:null,
      description: "",
      address: "",
      city: "",
      state: "",
      zipcode: null,
      suggested: false,
      country: ""
    };
  }

  submitForm() {
    if (this.registerForm.valid) {
      const formData = this.createFormData(this.registerForm.value);
      this.charityServices
        .postCharty(formData)
        .subscribe((res,) => {
          // console.log(res);
          if (res) {
            swal("Succefully Added", "success");
            this.registerForm.reset();
            // console.log("res",res);
          } else{
            swal("Email is already registerd", "Error");
          }
        })
    } else {
      swal("Please enter valid data", "");
    }
  }
  createFormData(formValues) {
    const formData = new FormData();
    Object.keys(formValues).map((key) => {
      formData.append(key, formValues[key]);
    });
    formData.append('charityLogos', this.charityLogoFile);
    console.log('formData', formData);
    return formData;
  }

}


