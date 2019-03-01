import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharityUserComponent } from './charityComponents/charity-user/charity-user.component';
import { SignInComponent } from './charityComponents/charity-user/sign-in/sign-in.component';
import { SignUpComponent } from './charityComponents/charity-user/sign-up/sign-up.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AdminLoginComponent } from './adminComponents/admin-login/admin-login.component'
import { AdminComponent } from './adminComponents/adminpanel/admin.component'; 
import {AuthGaurd}from './services/AuthGuard.Admin'
import { AuthGaurd1 }from './services/AuthGuard.Charity'
import { PaymentReportComponent } from './charityComponents/charity-panel/payment-report/payment-report.component';
import { CharityPanelComponent } from './charityComponents/charity-panel/charity-panel.component';
import { AdminDasComponent } from './adminComponents/admin-das/admin-das.component';

export const routes: Routes = [
  { path: 'home', component:StartPageComponent },
  { path: 'signup', component: SignUpComponent },
  
  {
    path: "charityUser",
    component: CharityUserComponent,
    children: [
      { path: 'signin', component: SignInComponent }
    ]
  },
  {
    path: 'charity',  component: CharityPanelComponent, canActivate:[AuthGaurd1],
    children: [{ path: 'paymentreport', component: PaymentReportComponent }]
  },
  
  { path:'adminlogin', component: AdminLoginComponent },
  { path:'dashboard', component: AdminDasComponent ,canActivate: [AuthGaurd],
    children: [{  path: 'adminpanel', component: AdminComponent  }]
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
  //  { path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
