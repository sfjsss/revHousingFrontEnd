import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  selectFormControl = new FormControl('', Validators.required);
  public logo = '../../../assets/images/logo.png'; 

  constructor(private authService: AuthService, private matSnackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const formValue = form.form.value;
    const formData = {
      first_name: formValue.firstName,
      last_name: formValue.lastName,
      email: formValue.email,
      pass: formValue.password,
      phone: formValue.phone,
      gender: formValue.gender
    }
    this.authService.registerUser(formData).subscribe(response => {
      console.log(response);
      if (response.body == 0) {
        console.log("im triggered");
        this.openSnackBar("Email has to be unique", "fail");
      } else {
        sessionStorage.setItem("userId", response.body);
        this.router.navigate(['/']);
      }
    })
  }

  openSnackBar(message, action) {
    this.matSnackBar.open(message, action, {duration: 2000});
  }

}