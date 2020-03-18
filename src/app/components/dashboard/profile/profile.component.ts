import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {

  public avatar = "../../../assets/images/avatar.png";

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
      console.log(form);
      const formValue = form.form.value;
      const formData = {
        firstname: formValue.firstname,
        lastname: formValue.lastname,
        email: formValue.email,
        phone: formValue.phone,
        password: formValue.password
      };
  }
}
