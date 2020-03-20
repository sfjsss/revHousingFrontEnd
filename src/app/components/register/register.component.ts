import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UsersService } from'src/app/services/users.service';

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

  constructor(private userService : UsersService) { }

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
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      email: formValue.email,
      phone: formValue.phone,
      pass: formValue.pass,
      gender: formValue.gender
    };
    console.log(formData);
    this.userService.createuser(formData).subscribe(response => {
      console.log(response);
    })
  }

}