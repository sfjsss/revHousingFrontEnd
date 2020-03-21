import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-profile-update',
  templateUrl: './confirm-profile-update.component.html',
  styleUrls: ['./confirm-profile-update.component.css']
})
export class ConfirmProfileUpdateComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmProfileUpdateComponent>) { }

  ngOnInit(): void {
  }

  onClickClose() {
    this.dialogRef.close();
  }

}
