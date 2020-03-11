import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public women = '../../../assets/images/women.jpg';
  public logo = '../../../assets/images/logo.png';

  constructor() { }

  ngOnInit() {
  }

}
