import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LandlordComponent } from './home/landlord/landlord.component';

const routes: Routes = 
[
  {path: '', component: SignupComponent},{path: 'signin', component: SigninComponent}, {path: 'signup', component: SignupComponent},
  {path: 'signin/', component: SigninComponent},{path: 'home', component: HomeComponent},
  {path: 'home/', component: HomeComponent},{path: 'landlord', component: LandlordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
