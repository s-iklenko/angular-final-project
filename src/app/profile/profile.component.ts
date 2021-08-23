import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl('')
    })
  }

  saveProfile() {
    const formData = {...this.form.value}
    console.log(formData)
  }
}
