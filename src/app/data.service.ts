// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { AppSettings } from '../app/app.settings';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//   constructor(private http: HttpClient) { }


//   //login
//   public CharityLogin(data){
//     const httpOption = {
//       headers: new HttpHeaders({ 'Content-type': 'application/json' })
//       };
//     let url = AppSettings.BASE_URL + AppSettings.CHARITY_LOGIN ;
//     return this.http.post(url,data,httpOption);
//   }

//   // getreport
//   public getReport(page) {
//     let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
//     return this.http.get(url + "/" + localStorage.getItem("_id") + "?page=" + page);
//   }

//   public sortAmount(page, amount) {
//     let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
//     return this.http.get(url + "/" + localStorage.getItem("_id") + "?page=" + page + "&amount=" + amount);
//   }

//   public sortDate(page, date) {
//     let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
//     return this.http.get(url + "/" + localStorage.getItem("_id") + "?page=" + page + "&date=" + date);
//   }

//   public sortStatus(page, status) {
//     let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
//     return this.http.get(url + "/" + localStorage.getItem("_id") + "?page=" + page + "&status=" + status);
//   }

//   //Search and sort
//   public searchReport(data) {
//     const httpOption = {
//       headers: new HttpHeaders({ 'Content-type': 'application/json' })
//     };
//     let url = AppSettings.BASE_URL + AppSettings.SEARCH_REPORT;
//     return this.http.post(url, data, httpOption);
//   }
// }
