import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { baseURL } from "../shop-steam";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any
  user: any

  constructor(
    private readonly http: HttpClient
  ) { }

  submitReg(data: string): Observable<string>{
    return this.http.post<string>(`${baseURL}api/reg`, data);
  }

  submitAuth(data: string): Observable<string> {
    return this.http.post<string>(`${baseURL}api/auth`, data);
  }
  storeUser(token: any, email: any){
    localStorage.setItem('jwt_token', token);
    localStorage.setItem('email', email);
    this.token = token;
    this.user = email;
  }
  getToken(){
    return localStorage.getItem('jwt_token');
  }
  logout(){
    this.token = null;
    localStorage.clear();
  }

}


