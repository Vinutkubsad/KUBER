import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app/app.settings';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // getreport
  public getReport(data){
    // const httpOption = {
    //   headers: new HttpHeaders({'Content-Type':'application/json'})
    // };
    let url = AppSettings.BASE_URL+AppSettings.PAYMENT_REPORT;
    return this.http.post(url,data);
  }

  
}
