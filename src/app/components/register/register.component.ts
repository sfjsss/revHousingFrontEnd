import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  selectFormControl = new FormControl('', Validators.required);
  public logo = '../../../assets/images/logo.png';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}