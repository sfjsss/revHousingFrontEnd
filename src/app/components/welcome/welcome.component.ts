import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public women = '../../../assets/images/women.jpg';
  public logo = '../../../assets/images/logo.png';

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
