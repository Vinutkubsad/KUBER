import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule}  from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataService } from './services/data.service'
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharityUserComponent } from './charity-user/charity-user.component';
import { SignInComponent } from './charity-user/sign-in/sign-in.component';
import { SignUpComponent } from './charity-user/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './adminpanel/admin.component'; 
import { AuthGaurd } from './services/AuthGuard.Admin';
import { AuthGaurd1 } from './services/AuthGuard.Charity';
import { PaymentReportComponent } from './charity-panel/payment-report/payment-report.component';
import { FilterPipe } from '../app/filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    CharityUserComponent,
    SignInComponent,
    SignUpComponent, 
    StartPageComponent,
    AdminLoginComponent,
    AdminComponent,PaymentReportComponent,
    FilterPipe,
    FooterComponent,
    NavBarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    DataTablesModule
  ],
  providers: [DataService,AuthGaurd,AuthGaurd1],
  bootstrap: [AppComponent]
})
export class AppModule { }
