import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharityUserComponent } from "./charity-user/charity-user.component";
import { SignInComponent } from "./charity-user/sign-in/sign-in.component";
import { SignUpComponent } from "./charity-user/sign-up/sign-up.component";
import { StartPageComponent } from './start-page/start-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './adminpanel/admin.component';
import {AuthGaurd}from './services/AuthGuard.Admin'
import { PaymentReportComponent } from './charity-panel/payment-report/payment-report.component';
import { AuthGaurd1 }from './services/AuthGuard.Charity'
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
  { path:'adminlogin', component: AdminLoginComponent },
  { path: 'adminpanel', component: AdminComponent,canActivate: [AuthGaurd]},
  { path: 'paymentreport', component: PaymentReportComponent, canActivate: [AuthGaurd1] },
  { path: "", redirectTo: "home", pathMatch: "full" }
  //  { path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
