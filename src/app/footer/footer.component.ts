import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  public name;
  public email;
  public message;

  constructor(public service:DataService) { }

  ngOnInit() {

  }


  // resetForm(form?: NgForm) {
  //   if (form) form.reset();
  //   this.charityServices.selectedCharity = {
  //     _id: "",
  //     charityName: "",
  //     email: "",
  //     phoneNumber:null,
  //     description: "",
  //     address: "",
  //     city: "",
  //     state: "",
  //     zipcode: null,
  //     suggested: false
  //   };
  // }


  refresh(): void {
    window.location.reload();
}


  send(){
    var data={ "name":this.name, "email":this.email,"helpMessage":this.message }
    this.service.sendMessage(data).subscribe((Response:any)=>{
      console.log(Response);
    });
    // this.refresh();
  }
}
