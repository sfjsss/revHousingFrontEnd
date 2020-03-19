import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmProfileUpdateComponent } from './confirm-profile-update/confirm-profile-update.component';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm;

  public avatar = "../../../assets/images/avatar.png";
  currentUser = {
    customer_id: 0,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    pass: ""
  };
  originalPass;

  constructor(private usersService: UsersService, private dialog: MatDialog) {}

  ngOnInit() {
    this.usersService.getUserById().subscribe(response => {
      this.currentUser = response;
      this.originalPass = response.pass;
      this.currentUser.pass = "";
    }) 
  }

  onSubmit(){
    if (this.currentUser.pass == "") {
      this.currentUser.pass = this.originalPass;
    }
    this.usersService.updateUser(this.currentUser).subscribe(response => {
      console.log(response);
    })
    this.dialog.open(ConfirmProfileUpdateComponent);
  }
}
