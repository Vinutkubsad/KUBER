import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { DataTablesModule } from 'angular-datatables';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharityUserComponent } from './charity-user/charity-user.component';
import { SignInComponent } from './charity-user/sign-in/sign-in.component';
import { SignUpComponent } from './charity-user/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { CharityPanelComponent } from './charity-panel/charity-panel.component';
import { PaymentReportComponent } from './charity-panel/payment-report/payment-report.component';
import { FilterPipe } from '../app/filter.pipe';
import { DataService } from '../app/data.service';




@NgModule({
  declarations: [
    AppComponent,
    CharityUserComponent,
    SignInComponent,
    SignUpComponent,
    CharityPanelComponent,
    PaymentReportComponent, 
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    NgbPaginationModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
