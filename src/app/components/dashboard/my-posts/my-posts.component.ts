import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ListInterestedComponent } from './list-interested/list-interested.component';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClickInterestedList() {
    this.dialog.open(ListInterestedComponent, {
      data: {
        message: 'this is a test message'
      }
    });
  }

}
