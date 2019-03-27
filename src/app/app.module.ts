import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { NgxPaginationModule}  from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './services/data.service';
import {NgbModule,NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgbdDatepickerPopup } from './datepicker-popup';


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
import { AboutComponent } from './about/about.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { PledgesComponent } from './dashboard/pledges/pledges.component';
import { HelpComponent } from './dashboard/help/help.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { MessagingService } from './services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire'; 
import { environment } from '../environments/environment';
import { SearchFilterPipe} from './filter.pipe';


import { StripePaymentComponent } from './charityComponents/charity-user/stripe-payment/stripe-payment.component';
import { StripeRespondComponent } from './charityComponents/charity-user/stripe-respond/stripe-respond.component';




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
    // NgbdDatepickerPopup,
    FooterComponent,
    NavBarComponent,
    SidebarComponent,
    AdminDasComponent,
    AboutComponent,
    SummaryComponent,
    ActivitiesComponent,
    PledgesComponent,
    HelpComponent,
    ProfileComponent,
    SearchFilterPipe,
    StripePaymentComponent,
    StripeRespondComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true}),
    HttpClientModule,
    // NgxPaginationModule,
    FormsModule,
    // BsDatepickerModule.forRoot(),
    // ModalModule.forRoot(),
    NgbModule,
    NgbPaginationModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [DataService,AuthGaurd,AuthGaurd1,MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
