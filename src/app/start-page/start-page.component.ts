import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormGroup, FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})

export class StartPageComponent implements OnInit {

  
  path;

  contactForm: FormGroup;

  constructor(public service: DataService, public router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetForm();
    this.path = this.router.url;
    this.contactForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      message: [null, [Validators.required]]
    })
  }
 

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.service.contact = {
      name: '',
      email: '',
      message: '',
    }
  }

  submitDetails() {
    if(this.contactForm.valid) {
      this.service.sendMessage(this.contactForm.value).subscribe(res =>{
        if(res) {
          swal("Good job!","Thank you, We will contact you soon.", "success");
          this.contactForm.reset();
        }else {
          swal("Something is missing", "Error!");
        }
      });
    } else {
      swal("Oops!","Please enter valid data!", "warning");
    }
  }

  Login() {
    this.router.navigate(['/signin']);
  }
  register(){
    this.router.navigate(['/signup'])
  }

}




