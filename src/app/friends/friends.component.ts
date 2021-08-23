import {Component, OnInit} from '@angular/core';

export interface Friend{
  title: string
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friends: Friend[] = [
    {title: 'Alex'},
    {title: 'Killer'},
    {title: 'Domino'},
    {title: 'Cheeps'},
    {title: 'Bomber'},
    {title: 'Belizard'},
    {title: 'Oxonomy'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
