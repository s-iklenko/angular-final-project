import {Component, OnInit} from '@angular/core';
import {FriendsService} from "../Services/friends.service";

export interface Friend{
  title: string
  _id: string
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  // friends: Friend[] = [
  //   {title: 'Alex'},
  //   {title: 'Killer'},
  //   {title: 'Domino'},
  //   {title: 'Cheeps'},
  //   {title: 'Bomber'},
  //   {title: 'Belizard'},
  //   {title: 'Oxonomy'},
  // ]

  public friends: Friend[] = [];
  searchText: any;

  constructor(
    private readonly friendsService: FriendsService,
  ) { }

  ngOnInit(): void {
    this.friendsService.getFriends$('user/friends').subscribe(data => {
      this.friends = data;
    })
  }

}
