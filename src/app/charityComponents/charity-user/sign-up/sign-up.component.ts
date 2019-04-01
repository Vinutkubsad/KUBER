import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  path: any;

  // charityLogoFile: any;
  charityLogoFile: File = null;
  charityLogos(event){
  // console.log(event.target.files);
  this.charityLogoFile = event.target.files[0];
  }

  constructor(private router: Router, private fb: FormBuilder, public charityServices: DataService
    ) { 

  }

  ngOnInit(): void {

    

    this.resetForm();
    this.registerForm = this.fb.group({
      charityName: [null, [Validators.required]],
      description: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phoneNumber: [null, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: [null, [Validators.required]],
      userAddress: [null, [Validators.required]],
      zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      city: [null, [Validators.required,Validators.pattern('^[a-zA-Z]{1,20}$')]],
      state: [null, [Validators.required,Validators.pattern('^[a-zA-Z]{1,20}$')]],
      country: [null, [Validators.required,Validators.pattern('^[a-zA-Z]{2,30}$')]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      charityLogos: [null],
      pincode:[null, [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      contact: [null, [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      taxId: [null, [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      userEmail: [null,[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      check:[null,Validators.required]
    });
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.charityServices.selectedCharity = {
      _id: "",
      charityName: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: null,
      description: "",
      address: "",
      userAddress: "",
      city: "",
      state: "",
      zipcode: null,
      suggested: false,
      country: "",
      charityLogos: null,
      taxId: "",
      contact: null,
      userEmail: "",
      pincode:null,
      check:null,
    };
  }

  submitForm() {
    if (this.registerForm.valid) {
      const formData = this.createFormData(this.registerForm.value);
      this.charityServices
        .registerCharity(this.registerForm.value)
        .subscribe((res) => {
          if (res) {
            swal("Great!","Succefully registered your charity", "success");
            this.registerForm.reset();
          } else {
            swal("Oops!","Email is already registerd", "info");
          }
        });
    } else {
      swal("Oops!", "Please fill the form!", "warning");
      
    }
  }

  createFormData(formValues) {
    const formData = new FormData();
    Object.keys(formValues).map((key) => {
    formData.append(key, formValues[key]);
    });
    formData.append('charityLogos', this.charityLogoFile);
    // console.log('formData', formData);
    return formData;
    }

    Login() {
    this.router.navigate(['/signin']);
  }
  back(){
    this.router.navigate(['/home']);
  }

  navigateLogin() {
    this.router.navigate(['signup']);
  }
}


