import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app/app.settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private Baseurl:string="http://18.222.254.228:8080";
 
  constructor(private http: HttpClient) { }


  //login
  public CharityLogin(data){
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
      };
    let url = AppSettings.BASE_URL + AppSettings.CHARITY_LOGIN ;
    return this.http.post(url,data,httpOption);
  }

  // getreport
  public getReport() {
    let url = AppSettings.BASE_URL + AppSettings.PAYMENT_REPORT;
    return this.http.get(url + "/" + localStorage.getItem("_id"));
    }
}
