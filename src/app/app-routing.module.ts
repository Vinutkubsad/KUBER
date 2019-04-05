import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from './charityComponents/charity-user/sign-in/sign-in.component';
import { SignUpComponent } from './charityComponents/charity-user/sign-up/sign-up.component';
import { StartPageComponent } from './start-page/start-page.component';
import { AuthGaurd1 } from './services/AuthGuard.Charity'

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { PledgesComponent } from './dashboard/pledges/pledges.component';
import { HelpComponent } from './dashboard/help/help.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { StripePaymentComponent } from './charityComponents/charity-user/stripe-payment/stripe-payment.component';
import { StripeRespondComponent } from './charityComponents/charity-user/stripe-respond/stripe-respond.component';
import { PayoutsComponent } from './dashboard/payouts/payouts.component';
// import { NotificationComponent } from './notification/notification.component';

export const routes: Routes = [
  { path: 'home', component: StartPageComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  
  {
    path: 'dashboard', component: NavBarComponent,canActivate:[AuthGaurd1],
    children: [
      { path: 'stripePayment', component: StripePaymentComponent },
      { path: 'stripeRespond', component: StripeRespondComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'pledges', component: PledgesComponent },
      { path: 'help', component: HelpComponent },
      { path: 'payout', component: PayoutsComponent },
      { path: 'profile/:id', component: ProfileComponent }
    ]
  },

  { path: "", redirectTo: "home", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
