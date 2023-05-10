import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   form = {           //anonymous form
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword:'',
    contact:''
  };

constructor(private router:Router, private signupService:SignupService){

}
  ngOnInit(): void {
   
    
  }
  
  onSubmit():void{
    console.log(this.form);
    let userInfo = {           //anonymous form
      firstName: this.form.firstName,
      lastName: this.form.lastName,
      email: this.form.email,
      password: this.form.password,
      contact: this.form.contact
    }
    this.signupService.signup(userInfo).subscribe(
      res => {}, //api valid response return krega to res ke through access krna h
      err => {}   //else error m aaega
    );
  }

  onReset(form: NgForm): void{
    form.reset();
  }

  public onLoginClick(){
    this.router.navigate(['./signin']);
  }
}
