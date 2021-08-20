import { Component, OnInit } from '@angular/core';

export interface CardGame{
  title: string
  subtitle: string
  img: string
  description: string
  id?: number
}

@Component({
  selector: 'app-game',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  cards: CardGame[] = [
    {title: 'Ведьмак 3: Дикая Охота',
      subtitle: 'RPG',
      img: 'https://www.ixbt.com/img/n1/news/2021/6/6/E531CN9WQAMmK-h_large.jpg',
      description: '«Ведьмак 3: Дикая Охота» — это сюжетная ролевая игра с открытым миром. Её действие разворачивается в поразительной волшебной вселенной, и любое ваше решение может повлечь за собой серьёзные последствия. Вы играете за профессионального охотника на монстров Геральта из Ривии, которому поручено найти Дитя предназначения в огромном мире, полном торговых городов, пиратских островов, опасных горных перевалов и заброшенных пещер.',
      id: 1},
    {title: 'Cyberpunk 2077',
      subtitle: 'Action',
      img: 'https://www.fazemag.de/wp-content/uploads/2020/11/Cyberpunk-2077.Bilddocx.jpg',
      description:'Cyberpunk 2077 — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Вы играете за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Вы сможете менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где ваши поступки влияют на ход сюжета и всё, что вас окружает.',
      id: 2},
    {title: 'Frostpunk',
      subtitle: 'Strategy',
      img: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Frostpunk_11bitstudios_S1_2560x1440-ef2f4d458120af0839dde35b1a022828',
      description:'Frostpunk — игра в жанре градостроительного симулятора и симулятор выживания разработанная компанией 11 bit studios. Игра включает в себя элементы стимпанка и альтернативной истории. Название игры является неологизмом, придуманным её создателями, и получено путём объединения слов frost и steampunk.',
      id: 3},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
