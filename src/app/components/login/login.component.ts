import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logo = '../../../assets/images/logo.png';
  public door = '../../../assets/images/door.jpg';

  constructor(private authService: AuthService, private matSnackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const formValue = form.form.value;
    const formData = {
      email: formValue.email,
      pass: formValue.password
    }
    this.authService.loginUser(formData).subscribe(response => {
      if (response.body == 0) {
        this.openSnackBar("Invalid credentials", "fail");
      } else {
        sessionStorage.setItem("userId", response.body);
        this.router.navigate(['/']);
      }
    })
  }

  openSnackBar(message, action) {
    this.matSnackBar.open(message, action, { duration: 2000 });
  }

}