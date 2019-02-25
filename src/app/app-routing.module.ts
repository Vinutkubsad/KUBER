import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharityUserComponent } from "./charity-user/charity-user.component";
import { SignInComponent } from "./charity-user/sign-in/sign-in.component";
import { SignUpComponent } from "./charity-user/sign-up/sign-up.component";
import { CharityPanelComponent } from "./charity-panel/charity-panal.component";
import { StartPageComponent } from './start-page/start-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './adminpanel/admin.component';
import { PaymentReportComponent } from './charity-panel/payment-report/payment-report.component';

export const routes: Routes = [
   { path: 'charity', component: CharityPanelComponent},
   { path: 'paymentreport', component: PaymentReportComponent },
 { path: "charity", component: CharityPanelComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: "charityUser",
    component: CharityUserComponent,
    children: [
      { path: 'signin', component: SignInComponent }
    ]
  },
  { path:'adminlogin', component: AdminLoginComponent },
  { path: 'adminpanel', component: AdminComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
