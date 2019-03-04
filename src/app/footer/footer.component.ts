import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormGroupDirective, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contactForm: FormGroup;

  constructor(public service: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.resetForm();
    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
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
    // console.log(this.contactForm.value);
    if(this.contactForm.valid) {
      this.service.sendMessage(this.contactForm.value).subscribe(res =>{
        if(res) {
          swal("Thank you, We will contact you shortly.", "success");
          this.contactForm.reset();
        }else {
          swal("Something is missing", "Error");
        }
      });
    } else {
      swal("Please enter valid data", "");
    }
  }

}
