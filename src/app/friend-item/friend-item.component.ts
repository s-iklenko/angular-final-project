import {Component, Input, OnInit} from '@angular/core';
import {Friend} from "../friends/friends.component";
import {FriendsService} from "../Services/friends.service";

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss']
})
export class FriendItemComponent implements OnInit {

  @Input() friend: Friend

  constructor(
    private readonly friendsService: FriendsService,
  ) { }

  ngOnInit(): void {
  }
  deleteItem(){
    this.friendsService.deleteFriendId$(`user/${this.friend._id}`)
      .subscribe((data) => {
        console.log(data);
        window.location.reload();
    })
  }

}
