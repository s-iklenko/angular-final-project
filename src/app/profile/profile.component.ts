import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProfileService} from "../Services/profile.service";
import {HttpErrorResponse} from "@angular/common/http";

export interface Profile {
  username: string
  email: string
  age: number
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  // public profile: Profile[];

  @Input() profile: Profile

  constructor(
    private readonly profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.updateForm()
    const response = this.profileService.getProfile$('user/profile');
    response.subscribe(date => this.profile = date);
  }
  updateForm(){
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl('')
    })
  }

  saveProfile() {
    this.profileService.updateProfile(this.form.value)
      .subscribe((data) => {
        console.log(data)
      },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
  }
}
