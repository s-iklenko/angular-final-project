import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any
  user: any

  constructor(
    private readonly http: HttpClient
  ) { }

  submitForm(date: string): Observable<string> {
    return this.http.post<string>(`http://localhost:8080/api/auth`, date);
  }
  // storeUser(token: any, user: any){
  //   localStorage.setItem('token', token)
  //   localStorage.setItem('user', JSON.stringify(user))
  //   this.token = token;
  //   this.user = user;
  // }

}


