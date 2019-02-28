import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { AppSettings } from '../app.settings';
import { Charity } from '../models/charity.model';
import { AdminLogin } from '../models/adminlogin.model';
import { charityLogin } from '../models/charitylogin.model';
import { Contact } from '../models/contactme.model';
import { headersToString } from 'selenium-webdriver/http';





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

  public getReport(page) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
    return this.http.get(url + "?page=" + page, httpOption);
  }
  // sendMessage(data) {
  //   let url = AppSettings.BASE_URL + AppSettings.SEND_MESSAGE;
  //   return this.http.post(url, data);
  // }


  postCharty(data: Charity) {
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_URL;
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

  public sortAmount(page, amount) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
    return this.http.get(url + "/" + "?page=" + page + "&amount=" + amount, httpOption);
  }

  public sortDate(page, date) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
    return this.http.get(url + "/" + "?page=" + page + "&date=" + date, httpOption);
  }

  public sortStatus(page, status) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
    return this.http.get(url + "/" + "?page=" + page + "&status=" + status, httpOption);
  }

  //Search and sort
  public searchReport(data) {
    const httpOption = {
      headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwt') })
    }
    let url = AppSettings.BASE_URL + AppSettings.SEARCH_REPORT;
    return this.http.post(url, data, httpOption);
  }

  sendMessage(data: Contact){
    let url = AppSettings.BASE_URL + AppSettings.SEND_MESSAGE;
    return this.http.post(url,data);
  }
}

