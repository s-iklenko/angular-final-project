import {Component, Input, OnInit} from '@angular/core';
import {GamesService} from "../Services/games.service";

export interface CardGame{
  title: string
  subtitle: string
  img: string
  description: string
  price: number
  _id?: string
}

@Component({
  selector: 'app-game',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  public cards: CardGame[] = [];
  searchText: any;

  action = false;
  rpg = false;
  adventure = false;

  constructor(
    private readonly gamesService: GamesService
  ) {}

  ngOnInit(): void {
    const response = this.gamesService.getGames$('api/games');
    response.subscribe(date => this.cards = date);
  }

  onActionChange(event: any) {
    this.action = !this.action;
    if(this.action){
      const action = this.gamesService.getGames$('api/games/action');
      action.subscribe(date => this.cards = date);
    } else {
      const response = this.gamesService.getGames$('api/games');
      response.subscribe(date => this.cards = date);
    }
  }
  onRpgChange(event: any) {
    this.rpg = !this.rpg;
    if(this.rpg){
      const rpg = this.gamesService.getGames$('api/games/rpg');
      rpg.subscribe(date => this.cards = date);
    } else {
      const response = this.gamesService.getGames$('api/games');
      response.subscribe(date => this.cards = date);
    }
  }
  onAdventureChange(event: any) {
    this.adventure = !this.adventure;
    if(this.adventure){
      const adventure = this.gamesService.getGames$('api/games/adventure');
      adventure.subscribe(date => this.cards = date);
    } else {
      const response = this.gamesService.getGames$('api/games');
      response.subscribe(date => this.cards = date);
    }
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

}
