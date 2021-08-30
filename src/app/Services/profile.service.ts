import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Profile } from "../profile/profile.component";
import { baseURL } from "../shop-steam";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getProfile$(url: string): Observable<Profile> {

    return this.http.get<Profile>(`${baseURL}${url}`)

  }

  updateProfile(date: string): Observable<any>{
    return this.http.patch(`${baseURL}user/profile`, date)
  }
}
