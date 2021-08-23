import {Component, Input, OnInit} from '@angular/core';
import {Friend} from "../friends/friends.component";

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss']
})
export class FriendItemComponent implements OnInit {

  @Input() friend: Friend

  constructor() { }

  ngOnInit(): void {
  }

}
