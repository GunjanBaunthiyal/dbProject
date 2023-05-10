import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchPasswordDirective } from '../app/directives/password-pattern.directive';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddPropertyComponent } from './home/landlord/add-property/add-property.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    MatchPasswordDirective,
    SigninComponent,
    HomeComponent,
    AddPropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,      
    BrowserAnimationsModule
  ],
  providers: [],
  // exports: [MatDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
