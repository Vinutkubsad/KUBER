import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharityUserComponent } from './charity-user/charity-user.component';
import { SignInComponent } from './charity-user/sign-in/sign-in.component';
import { SignUpComponent } from './charity-user/sign-up/sign-up.component';
import { CharityPanalComponent } from './charity-panal/charity-panal.component';

export const routes: Routes = [
  { path: 'charity', component: CharityPanalComponent },
  {
    path: 'charitySignUp', component: CharityUserComponent,
    children: [{path : '', component : SignUpComponent }],
  },
  {
    path: 'charitysignIn', component: CharityUserComponent,
    children: [{path : '', component : SignInComponent }],
  },
  { path : '', redirectTo: 'charitysignIn', pathMatch : 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
