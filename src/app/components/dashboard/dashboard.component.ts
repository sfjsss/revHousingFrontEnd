import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  public logo = "../../../assets/images/logo.png";

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickLogout() {
    sessionStorage.removeItem("userId");
    this.router.navigate(['/goodbye']);
  }
}
