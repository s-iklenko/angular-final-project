import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Friend } from "../friends/friends.component";


@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(
    private readonly http: HttpClient
  ) {
  }
  getToken(){
    return localStorage.getItem('jwt_token')
  }
  public getFriends$(url: string): Observable<Friend[]> {

    return this.http.get<Friend[]>(`http://localhost:8080/${url}`)

  }
}
