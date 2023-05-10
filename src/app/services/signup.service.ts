import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) {
   }
   public signup(userInfo:any): Observable<any> {
    let url = ''; //port of the api+route 'http://localhost:5000/api'+'signup/' from backend
    return this.http.post(url,userInfo); //url,userinfo
   }
}
