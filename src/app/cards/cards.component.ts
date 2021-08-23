import {Component, Input, OnInit} from '@angular/core';
import {CardGame} from "../games/games.component";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() card: CardGame

  constructor() { }

  ngOnInit(): void {
  }

}
