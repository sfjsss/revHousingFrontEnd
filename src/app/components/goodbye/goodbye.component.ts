import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-goodbye",
  templateUrl: "./goodbye.component.html",
  styleUrls: ["./goodbye.component.css"]
})
export class GoodbyeComponent implements OnInit {

  public bye = "../../../assets/images/goodbye.jpg";
  public logo = "../../../assets/images/logo.png";

  constructor(private router: Router) {}

  ngOnInit() {}

  redirectToWelcome() {
    this.router.navigate(['/welcome']);
  }
}
