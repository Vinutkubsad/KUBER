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

  public getReport(page, amount, date, userName, status, net,application_fee_amount ) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
    if (amount !== undefined && date === undefined && userName === undefined && status === undefined && net === undefined && application_fee_amount === undefined)
      return this.http.get(url + "?page=" + page + "&amount=" + amount, httpOption);

    else if (amount === undefined && date !== undefined && userName === undefined && status === undefined && net === undefined && application_fee_amount === undefined) {
      return this.http.get(url + "?page=" + page + "&paymentDate=" + date, httpOption);

    } else if (amount === undefined && date === undefined && userName !== undefined  && status === undefined && net === undefined && application_fee_amount === undefined) {
      return this.http.get(url + "?page=" + page + "&userName=" + userName, httpOption);

    }else if (amount === undefined && date === undefined && userName === undefined  && status !== undefined && net === undefined && application_fee_amount === undefined) {
      return this.http.get(url + "?page=" + page + "&status=" + status, httpOption);

    }else if (amount === undefined && date === undefined && userName === undefined  && status === undefined && net !== undefined && application_fee_amount === undefined) {
      return this.http.get(url + "?page=" + page + "&net=" + net, httpOption);

    }else if (amount === undefined && date === undefined && userName === undefined  && status === undefined && net === undefined && application_fee_amount !== undefined) {
      return this.http.get(url + "?page=" + page + "&application_fee_amount=" + application_fee_amount, httpOption);

    }else return this.http.get(url + "?page=" + page, httpOption);
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
 
  allPledges(){
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.PLEDGES_LIST;
    return this.http.get(url,httpOption);
  }
   
   balance(){
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.BALANCE;
    return this.http.get(url,httpOption);
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

  dateFilterActivity(data){
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.DATE_FILTER;
    return this.http.post(url, data, httpOption);
  }
  
  payout(data){
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.PAYOUT;
    return this.http.post(url, data, httpOption);
  }
  getPdf(){
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.REPORTS;
    return this.http.get(url,httpOption);
   }

   public getReportSummary(page, amount, date, userName) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
    if (amount !== undefined && date === undefined && userName === undefined)
      return this.http.get(url + "?page=" + page + "&amount=" + amount, httpOption);
    else if (amount === undefined && date !== undefined && userName === undefined) {
      return this.http.get(url + "?page=" + page + "&paymentDate=" + date, httpOption);
    } else if (amount === undefined && date === undefined && userName !== undefined) {
      return this.http.get(url + "?page=" + page + "&userName=" + userName, httpOption);
    } else return this.http.get(url + "?page=" + page, httpOption);
  }
}

