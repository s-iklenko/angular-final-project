import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CardGame } from "../games/games.component";
import { HttpClient } from "@angular/common/http";
import { baseURL } from "../shop-steam";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getGames$(url: string): Observable<CardGame[]> {
    return this.http.get<CardGame[]>(`${baseURL}${url}`)
  }
}
