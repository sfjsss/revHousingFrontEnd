import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-goodbye",
  templateUrl: "./goodbye.component.html",
  styleUrls: ["./goodbye.component.css"]
})
export class GoodbyeComponent implements OnInit {

  public bye = "../../../assets/images/goodbye.jpg";
  public logo = "../../../assets/images/logo.png";

  constructor() {}

  ngOnInit() {}
}
