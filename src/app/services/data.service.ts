import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { AppSettings } from '../app.settings';
import { Charity } from '../models/charity.model';
import { AdminLogin } from '../models/adminlogin.model';
import { charityLogin } from '../models/charitylogin.model';




@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  selectedCharity: Charity;
  charities: Charity[];
  adminLogin: AdminLogin;
  charityLogin: charityLogin;

  constructor(private http: HttpClient) { }

  // getreport
  public getReport(data){
    // const httpOption = {
    //   headers: new HttpHeaders({'Content-Type':'application/json'})
    // };
    let url = AppSettings.BASE_URL+AppSettings.PAYMENT_REPORT;
    return this.http.post(url,data);
  }


  postCharty(data: Charity){
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_URL;
    return this.http.post(url,data)
  }
  
  AdminLogin(data: AdminLogin){
    let url=AppSettings.BASE_URL+AppSettings.ADMIN_LOGIN;
    return this.http.post(url,data);
  }
  
  getCharitydetails(){
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_ALL;
    return this.http.get(url).map((data) => {return data})
  }

  approveCharity(data){
    let url = AppSettings.BASE_URL + AppSettings.APPROVE_CHARITY;
    return this.http.post(url,data);
  }

  CharityLogin(data) {
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_LOGIN;
    return this.http.post(url,data);
  }
}
