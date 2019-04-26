import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import {NgbModule,NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { AlertModule, BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';


import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './charityComponents/charity-user/sign-in/sign-in.component';
import { SignUpComponent } from './charityComponents/charity-user/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { AuthGaurd } from './services/AuthGuard.Admin';
import { AuthGaurd1 } from './services/AuthGuard.Charity';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { PledgesComponent } from './dashboard/pledges/pledges.component';
import { HelpComponent } from './dashboard/help/help.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { MessagingService } from './services/messaging.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire'; 
import { FilterPipe } from './filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination'
// import { FilterPipeModule } from 'ngx-filter-pipe';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { StripePaymentComponent } from './charityComponents/charity-user/stripe-payment/stripe-payment.component';
import { StripeRespondComponent } from './charityComponents/charity-user/stripe-respond/stripe-respond.component';
import { PayoutsComponent } from './dashboard/payouts/payouts.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    StartPageComponent,
    FooterComponent,
    NavBarComponent,
    SidebarComponent,
    AboutComponent,
    SummaryComponent,
    ActivitiesComponent,
    PledgesComponent,
    HelpComponent,
    ProfileComponent,
    FilterPipe,
    StripePaymentComponent,
    StripeRespondComponent,
    PayoutsComponent,
    PrivacyPolicyComponent,
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
    NgbModule,
    AlertModule.forRoot(),
    NgbPaginationModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    NgxPaginationModule,
    // FilterPipeModule,
    // MatDatepickerModule,
    MatProgressSpinnerModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
    // AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [DataService,DatePipe,AuthGaurd,AuthGaurd1,MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
