import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, FormGroupDirective } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
 

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, public adminservices: DataService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9_.]+$/i)]),
      password: new FormControl(null, Validators.required)
    });
    let tocken = localStorage.getItem('isLogin');
    if (tocken) {
          }
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.adminservices.adminLogin = {
      email:'',
      password:''
    }
  }
  submitForm(){
    debugger
    console.log(this.loginForm.value,"validity",this.loginForm.valid);
    // if(this.loginForm.valid){
    this.adminservices.AdminLogin(this.loginForm.value).subscribe((res)=>{
      if(res){
        localStorage.setItem('AdminLogin', 'true');
        this.router.navigate(['adminpanel'])
        console.log(res)
      } 
      else{
        swal("Error!", "You clicked the button!", "warnning");

      }
    })
  // }
}

}
