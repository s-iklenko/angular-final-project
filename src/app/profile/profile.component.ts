import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProfileService} from "../Services/profile.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";

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

  @Input() profile: Profile

  constructor(
    private readonly profileService: ProfileService,
    private readonly router: Router,
    private readonly authService: AuthService,
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
          window.location.reload();
          console.log(data);
      },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
  }
  logoutUser(){
    this.authService.logout();
    this.router.navigate(['auth']);
    return false;
  }
}
