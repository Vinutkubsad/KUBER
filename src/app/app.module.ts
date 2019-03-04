import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule}  from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './services/data.service';
import {NgbModule,NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharityUserComponent } from './charityComponents/charity-user/charity-user.component';
import { SignInComponent } from './charityComponents/charity-user/sign-in/sign-in.component';
import { SignUpComponent } from './charityComponents/charity-user/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component';
import { AdminComponent } from './adminComponents/adminpanel/admin.component'; 
import { AuthGaurd } from './services/AuthGuard.Admin';
import { AuthGaurd1 } from './services/AuthGuard.Charity';
import { PaymentReportComponent } from './charityComponents/charity-panel/payment-report/payment-report.component';
// import { DataService } from '../app/data.service';
import { CharityPanelComponent } from './charityComponents/charity-panel/charity-panel.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminDasComponent } from './adminComponents/admin-das/admin-das.component';




@NgModule({
  declarations: [
    AppComponent,
    CharityUserComponent,
    SignInComponent,
    SignUpComponent,
    CharityPanelComponent,
    PaymentReportComponent,
    StartPageComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminComponent,
    PaymentReportComponent,
    
    FooterComponent,
    NavBarComponent,
    SidebarComponent,
    AdminDasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    NgbPaginationModule
    
  ],
  providers: [DataService,AuthGaurd,AuthGaurd1],
  bootstrap: [AppComponent]
})
export class AppModule { }
