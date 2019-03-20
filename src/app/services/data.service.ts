import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { AppSettings } from '../app.settings';
import { Charity } from '../models/charity.model';
import { AdminLogin } from '../models/adminlogin.model';
import { charityLogin } from '../models/charitylogin.model';
import { Contact } from '../models/contactme.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  selectedCharity: Charity;
  charities: Charity[];
  adminLogin: AdminLogin;
  charityLogin: charityLogin;
  contact: Contact;
  contacts: Contact[];

  constructor(private http: HttpClient) { }

  public getReport(page, amount, date, status) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
    if (amount !== undefined && date === undefined && status === undefined)
      return this.http.get(url + "?page=" + page + "&amount=" + amount, httpOption);
    else if (amount === undefined && date !== undefined && status === undefined) {
      return this.http.get(url + "?page=" + page + "&date=" + date, httpOption);
    } else if (amount === undefined && date === undefined && status !== undefined) {
      return this.http.get(url + "?page=" + page + "&status=" + status, httpOption);
    } else return this.http.get(url + "?page=" + page, httpOption);
  }

  registerCharity(data: Charity) {
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_REGISTER;
    return this.http.post(url, data)
  }

  AdminLogin(data: AdminLogin) {
    let url = AppSettings.BASE_URL + AppSettings.ADMIN_LOGIN;
    return this.http.post(url, data);
  }

  getCharitydetails() {
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_ALL;
    return this.http.get(url).map((data) => { return data })
  }

  approveCharity(data) {
    let url = AppSettings.BASE_URL + AppSettings.APPROVE_CHARITY;
    return this.http.post(url, data);
  }

  CharityLogin(data) {
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_LOGIN;
    return this.http.post(url, data);
  }

  //Search 
  public searchReport(data, page) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.SEARCH_REPORT;
    return this.http.post(url + "?page=" + page, data, httpOption);
  }

  sendMessage(data: Contact) {
    let url = AppSettings.BASE_URL + AppSettings.SEND_MESSAGE;
    return this.http.post(url, data);
  }

  getCharityById(id) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt'), 'Content-Type': 'application/json' })
    }
    let url = AppSettings.BASE_URL + AppSettings.GET_CHARITY_ID + id;
    return this.http.get(url, httpOption);
  }

  editProfile(data, id) {
    const httpOption = {
      headers: new HttpHeaders({  'Authorization': localStorage.getItem('jwt')  })
    }
    let url = AppSettings.BASE_URL + AppSettings.EDIT_CHARITY + id;
    return this.http.post(url,data,httpOption);
  }

  stipeDetail(code){
    const httpOption = {
      headers: new HttpHeaders({  'Authorization': localStorage.getItem('jwt')  })
    }
    let url = AppSettings.BASE_URL + AppSettings.STIPE_ID + "?code=" + code;
    return this.http.post(url, httpOption)
  }
  

  charityReport() {
    const httpOption = {
      headers: new HttpHeaders({'Authorization': localStorage.getItem('jwt'), 'Content-Type': 'application/json' })
    }
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_REPORT;
    return this.http.get(url,httpOption);
  } 

  // stipeDetail(stripe_id){
  //   const httpOption = {
  //     headers: new HttpHeaders({  'Authorization': localStorage.getItem('jwt')  })
  //   }
  //   let url = AppSettings.BASE_URL + AppSettings.STIPE_ID;
  //   return this.http.post(url,stripe_id);
  // }
  // setupStripe() {
  //   let url = "https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://stripe.com/connect/default/oauth/test&client_id=ca_EeCnGZY8hOVM2FWVI5sKxCS2gsXPZm1I&state={STATE_VALUE}";
  //   return this.http.get(url);
  // }
  // localhost:3001/v1/charities/authorize?code=ac_Eh0zUZOG8ahHzZ6QgzQqPsho7ZZW350r 
}

