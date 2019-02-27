import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm, FormGroupDirective } from '@angular/forms';

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
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9_.]+$/i)]),
      password: new FormControl(null, Validators.required)
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
    console.log('click');
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
    console.log(data);
    this.service.CharityLogin(data).subscribe((response: any) => {
      if(response) {
        this.router.navigate(['paymentreport']);
      }
      localStorage.setItem('_id', response.result._id);
      // this.router.navigate(['paymentreport']);
    });
  }
}
