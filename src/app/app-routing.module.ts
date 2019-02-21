import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharityUserComponent } from "./charity-user/charity-user.component";
import { SignInComponent } from "./charity-user/sign-in/sign-in.component";
import { SignUpComponent } from "./charity-user/sign-up/sign-up.component";
import { CharityPanelComponent } from "./charity-panel/charity-panal.component";
import { StartPageComponent } from './start-page/start-page.component';

export const routes: Routes = [
  { path: 'home', component:StartPageComponent },
  { path: "charity", component: CharityPanelComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: "charityUser",
    component: CharityUserComponent,
    children: [
      { path: 'signin', component: SignInComponent }
    ]
  },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
