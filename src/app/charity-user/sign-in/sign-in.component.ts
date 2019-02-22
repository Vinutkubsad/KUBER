import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public display;
  public id : string;
  public data : any;
  public Email : string;
  public Password:string;
  public payments: any[];
  constructor(private service:DataService, private rout:Router ) { }

  ngOnInit() {
  }

  signin(){
    var data = { "email" : this.Email, "password" : this.Password }
    console.log(data);
    this.service.login(data).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem('_id', response.result._id);
        this.rout.navigate(['charity']);   
   });
   }
}
