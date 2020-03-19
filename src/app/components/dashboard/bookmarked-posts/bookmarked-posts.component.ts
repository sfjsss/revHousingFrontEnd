import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-bookmarked-posts',
  templateUrl: './bookmarked-posts.component.html',
  styleUrls: ['./bookmarked-posts.component.css']
})
export class BookmarkedPostsComponent implements OnInit {
  bookmarkedPosts = [];

  constructor(private usersService: UsersService, private router: Router, private postsService: PostsService) { }

  ngOnInit(): void {
    this.renderPage();
  }

  onClickCard(i) {
    const post_id = this.bookmarkedPosts[i].post_id;
    this.router.navigate([`/view-post/${post_id}`]);
  }

  onClickUnBookMark(i) {
    const post_id = this.bookmarkedPosts[i].post_id;
    this.postsService.unBookMarkPost(post_id).subscribe(response => {
      this.renderPage();
    })
  }

  onClickInterest(i) {
    const post_id = this.bookmarkedPosts[i].post_id;
    this.postsService.interestPost(post_id).subscribe(response => {
      this.renderPage();
    })
  }

  renderPage() {
    this.usersService.getUserById().subscribe(response => {
      this.bookmarkedPosts = response.bookmarkedPosts;
    })
  }

}
