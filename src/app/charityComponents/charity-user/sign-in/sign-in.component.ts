import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, FormGroupDirective } from '@angular/forms';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(public service: DataService, public router: Router, public fb: FormBuilder) { }

  ngOnInit() {
    this.resetForm();
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password: new FormControl(null, [Validators.required])
    });
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.service.charityLogin = {
      email: '',
      password: ''
    }
  }

  // toggel Password
  togglePwd() {
    if(this.passwordShown){
      this.passwordShown = false;
      this.passwordType = 'password';
    }else {
      this.passwordShown = true;
      this.passwordType = 'text';
    }
  }

 

  loginSubmit() {
    var data = { "email": this.service.charityLogin.email, "password": this.service.charityLogin.password }
    this.service.CharityLogin(data).subscribe((response: any) => {
      if(response.success) {
        console.log(response);
        
        localStorage.setItem("jwt", response.result.jwt);
        localStorage.setItem('user',response.result.resp['_id']); 
        this.resetForm();
        this.router.navigate(['dashboard/summary'])
      } else {
        swal("Sorry ","Email not found","error")
      }
      
    });
   
    
  }
  register(){
    this.router.navigate(['signup']);
  }
}
   