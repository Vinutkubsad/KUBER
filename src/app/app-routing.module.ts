import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharityUserComponent } from './charity-user/charity-user.component';
import { SignInComponent } from './charity-user/sign-in/sign-in.component';
import { SignUpComponent } from './charity-user/sign-up/sign-up.component';
import { PaymentReportComponent } from './charity-panel/payment-report/payment-report.component';
import { CharityPanelComponent } from './charity-panel/charity-panel.component';

export const routes: Routes = [
   { path: 'charity', component: CharityPanelComponent},
   { path: 'paymentreport', component: PaymentReportComponent },
   { path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
