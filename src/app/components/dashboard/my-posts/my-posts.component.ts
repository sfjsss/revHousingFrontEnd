import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListInterestedComponent } from './list-interested/list-interested.component';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/classes/Post';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})

export class MyPostsComponent implements OnInit {

  posts: Post[];
  filteredPosts: Post[];

  constructor(private postsService: PostsService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getposts();
  }

  getposts() {
    this.postsService.getAllPosts().subscribe( post => {
      this.posts = post;
    });
  }

  onClickInterestedList(id: number) {
    const dialogConfig = new MatDialogConfig();
    this.filteredPosts = this.posts.filter( post => {
        return post.post_id === id;
    });
    dialogConfig.data = this.filteredPosts;
    this.dialog.open(ListInterestedComponent, dialogConfig);
  }

}
