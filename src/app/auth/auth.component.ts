import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../Services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: FormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(){
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', Validators.required)
    })
  }

  userAuth(){
    this.authService.submitAuth(this.form.value)
      .subscribe(
        (data) => {
          const token = JSON.stringify(data, ['token']).split('"')[3];
          const email = JSON.stringify(data, ['user', 'email']).split('"')[5];
          // console.log("User is logged in", JSON.stringify(data, ['user', 'email']).split('"')[5]);
          this.router.navigate(['profile']);
          this.authService.storeUser(token, email);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

}
