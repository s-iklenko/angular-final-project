import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Friend } from "../friends/friends.component";
import { baseURL } from "../shop-steam";


@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  public getFriends$(url: string): Observable<Friend[]> {

    return this.http.get<Friend[]>(`${baseURL}${url}`)

  }

  public deleteFriendId$(url: string): Observable<Friend[]> {
    return this.http.delete<Friend[]>(`${baseURL}${url}`);
  }

}
