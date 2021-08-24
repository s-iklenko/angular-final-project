import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CardGame } from "../games/games.component";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getGames$(url: string): Observable<CardGame[]> {
    return this.http.get<CardGame[]>(`http://localhost:8080/${url}`)
  }
}
