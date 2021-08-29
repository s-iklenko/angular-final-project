import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Profile} from "../profile/profile.component";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getProfile$(url: string): Observable<Profile> {

    return this.http.get<Profile>(`http://localhost:8080/${url}`)

  }

  updateProfile(date: string): Observable<any>{
    return this.http.patch(`http://localhost:8080/user/profile`, date)
  }
}
