import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../Services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

interface Token {
  jwt_token: string,
  message: string
}

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
    this.authService.submitForm(this.form.value)
      .subscribe(
        (data) => {
          console.log("User is logged in");
          this.router.navigate(['profile']);
          this.authService.storeUser(data);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

}
