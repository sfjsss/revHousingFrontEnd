import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logo = '../../../assets/images/logo.png';
  public door = '../../../assets/images/door.jpg';

  constructor(private userService : UsersService, private router: Router) { }

  body = {};
  currentUser = '';

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const formValue = form.form.value;
    const formData = {
      email: formValue.email,
      pass: formValue.pass
    };
    console.log(formData);
    this.userService.loginUser(formData).subscribe(response => {
      this.body = { customerId: response.body.customer_id,
        firstName: response.body.first_name,
        lastName: response.body.last_name,
        email: response.body.email,
        phone: response.body.phone,
        gender: response.body.gender
      };
      this.currentUser = JSON.stringify(this.body);
      if (response.status == 200 ) {
       window.localStorage.setItem("session", this.currentUser);
       this.router.navigate([`/`]);
      }
    })
  }

}
