import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedValue: string;

  selectFormControl = new FormControl('', Validators.required);
  public logo = '../../../assets/images/logo.png';

  constructor() { }

  ngOnInit(): void {
  }

  genders: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'}
  ];

  onSubmit(form: NgForm) {
    const formValue = form.form.value;
    const formData = {
      firstname: formValue.first_name,
      lastname: formValue.last_name,
      email: formValue.email,
      phone: formValue.phone,
      password: formValue.pass,
      gender: formValue.gender
    };
    console.log(formData);
  }

}