import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../Services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: FormGroup;

  constructor(
    public readonly authService: AuthService
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
          console.log('Form submitted successfully', data);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }

}
