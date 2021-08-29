import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any

  constructor(
    private readonly http: HttpClient
  ) { }

  submitForm(date: string): Observable<string> {
    return this.http.post<string>(`http://localhost:8080/api/auth`, date);
  }
  storeUser(token: any){
    localStorage.setItem('jwt_token', token)
    this.token = token;
    console.log(this.token = token)
  }
  getToken(){
    return localStorage.getItem('jwt_token')
  }

}


