import { Component, OnInit } from '@angular/core';
import {GamesService} from "../games.service";


export interface CardGame{
  title: string
  subtitle: string[]
  img: string
  description: string
  price: number
  id?: number
}

@Component({
  selector: 'app-game',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public cards: CardGame[] = [];

  constructor(
    private readonly gamesService: GamesService
  ) { }

  ngOnInit(): void {
    const response = this.gamesService.getGames$('api/games');
    response.subscribe(date => this.cards = date)
  }
}
