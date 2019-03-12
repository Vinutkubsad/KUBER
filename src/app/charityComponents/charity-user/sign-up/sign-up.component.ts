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



  constructor(private router: Router, private fb: FormBuilder, public charityServices: DataService) { 

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
      zipcode: [null, [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      city: [null, [Validators.required,Validators.pattern('^[a-zA-Z]{2,20}$')]],
      state: [null, [Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
      country: [null, [Validators.required,Validators.pattern('^[a-zA-Z]{2,30}$')]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      charityLogos: [null],
      pincode:[null, [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      contact: [null, [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      taxId: [null, [Validators.required, Validators.pattern('^[A-Z0-9]{10}$')]],
      userEmail: [null,[Validators.required]],
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
      this.charityServices
        .registerCharity(this.registerForm.value)
        .subscribe((res) => {
          if (res) {
            console.log(res);
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

  // submitForm(){
  //   var data = {
  //     "charityName":this.charityServices.selectedCharity.charityName,
  //     "description":this.charityServices.selectedCharity.description,
  //     "email":this.charityServices.selectedCharity.email,
  //     "phoneNumber":this.charityServices.selectedCharity.phoneNumber,
  //     "taxId":this.charityServices.selectedCharity.taxId,
  //     "address":this.charityServices.selectedCharity.address,
  //     "country":this.charityServices.selectedCharity.country,
  //     "state":this.charityServices.selectedCharity.state,
  //     "city":this.charityServices.selectedCharity.city,
  //     "zipcode":this.charityServices.selectedCharity.zipcode,
  //     "firstName":this.charityServices.selectedCharity.firstName,
  //     "lastName":this.charityServices.selectedCharity.lastName,
  //     "userEmail":this.charityServices.selectedCharity.userEmail,
  //     "contact":this.charityServices.selectedCharity.contact,
  //     "userAddress":this.charityServices.selectedCharity.userAddress,
  //     "pincode":this.charityServices.selectedCharity.pincode
  // }
  // this.charityServices.registerCharity(data).subscribe((Response:any)=>{
  //   console.log(Response); 
  // });
  // }

  login() {
    this.router.navigate(['/signin']);
  }
  back(){
    this.router.navigate(['/home']);
  }

  // navigateLogin() {
  //   this.router.navigate(['signup']);
  // }

}


