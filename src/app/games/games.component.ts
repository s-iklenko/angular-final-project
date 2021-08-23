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

  public cards: CardGame[] = [
    {title: 'Ведьмак 3: Дикая Охота',
      subtitle: ['Action, RPG'],
      img: 'https://www.ixbt.com/img/n1/news/2021/6/6/E531CN9WQAMmK-h_large.jpg',
      description: '«Ведьмак 3: Дикая Охота» — это сюжетная ролевая игра с открытым миром. Её действие разворачивается в поразительной волшебной вселенной, и любое ваше решение может повлечь за собой серьёзные последствия. Вы играете за профессионального охотника на монстров Геральта из Ривии, которому поручено найти Дитя предназначения в огромном мире, полном торговых городов, пиратских островов, опасных горных перевалов и заброшенных пещер.',
      price: 25,
      id: 1},
    {title: 'Cyberpunk 2077',
      subtitle: ['Action'],
      img: 'https://www.fazemag.de/wp-content/uploads/2020/11/Cyberpunk-2077.Bilddocx.jpg',
      description:'Cyberpunk 2077 — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Вы играете за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Вы сможете менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где ваши поступки влияют на ход сюжета и всё, что вас окружает.',
      price: 18,
      id: 2},
    {title: 'Frostpunk',
      subtitle: ['Strategy'],
      img: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Frostpunk_11bitstudios_S1_2560x1440-ef2f4d458120af0839dde35b1a022828',
      description:'Frostpunk — игра в жанре градостроительного симулятора и симулятор выживания разработанная компанией 11 bit studios. Игра включает в себя элементы стимпанка и альтернативной истории. Название игры является неологизмом, придуманным её создателями, и получено путём объединения слов frost и steampunk.',
      price: 12,
      id: 3},
    {title: 'STAR WARS™ Battlefront™ II',
      subtitle: ['Action'],
      img: 'https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg',
      description:'Star Wars: Battlefront II — компьютерная игра в жанре шутер от первого лица с возможностью переключаться на вид от третьего лица, по вселенной «Звёздных войн», четвёртая игра серии Star Wars Battlefront, являющаяся продолжением предыдущей части',
      price: 30,
      id: 4},
    {title: 'Days Gone',
      subtitle: ['Survival horror, Adventure'],
      img: 'https://playpress.ru/wp-content/uploads/2017/07/Days_gone_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.jpg',
      description:'Компьютерная игра в жанре приключенческого боевика с элементами survival horror с открытым миром от третьего лица, разработанная Bend Studio и изданная Sony Interactive Entertainment. Игра была официально анонсирована 13 июня 2016 года на выставке E3 2016.',
      price: 27,
      id: 5},
    {title: 'Horizon Zero Dawn',
      subtitle: ['Action, RPG'],
      img: 'https://image.api.playstation.com/vulcan/img/rnd/202009/3000/C14XMwZBi6CYKOacUDf6EzEs.jpg',
      description:'Horizon Zero Dawn — компьютерная игра в жанре Action/RPG с открытым миром, разработанная нидерландской студией Guerrilla Games и изданная Sony Interactive Entertainment для игровой консоли PlayStation 4 в 2017 году; версия игры для Windows вышла 7 августа 2020 года.',
      price: 19,
      id: 6},
  ];

  constructor(
    private readonly gamesService: GamesService
  ) { }

  ngOnInit(): void {
    const response = this.gamesService.getGames$('api/games');
    response.subscribe(date => this.cards = date)
  }
}
