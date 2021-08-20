import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})

export class RegComponent implements OnInit {

  form: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      login: new FormControl(''),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }
  userReg() {
    const formData = {...this.form.value}
    console.log(formData)
  }
}
