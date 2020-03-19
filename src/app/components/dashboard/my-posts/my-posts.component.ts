import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ListInterestedComponent } from './list-interested/list-interested.component';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  myPosts = [];

  constructor(private dialog: MatDialog, private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postsService.getPostsByUserId().subscribe(response => {
      this.myPosts = response;
    })
  }

  onClickInterestedList() {
    this.dialog.open(ListInterestedComponent, {
      data: {
        message: 'this is a test message'
      } 
    });
  }

  onClickCard(i) {
    console.log(i);
    const post_id = this.myPosts[i].post_id;
    this.router.navigate([`/view-post/${post_id}`]);
  }

}
