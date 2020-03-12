import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  logo = '../../../assets/images/logo.png';

  public logo = "../../../assets/images/logo.png";

  constructor() {}

  ngOnInit(): void {}
}
