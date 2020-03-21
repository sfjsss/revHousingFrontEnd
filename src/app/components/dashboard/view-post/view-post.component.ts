import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'; 
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  zoom: number = 15;
  bookmarked = false;
  interested = false;
  loaded = false;
  userId = sessionStorage.getItem("userId");
  
  currentPost = {
    post_id: "",
    title: "",
    rent: "",
    description: "",
    image_link_one: "",
    image_link_two: "",
    image_link_three: "",
    latitude: 0,
    longitude: 0, 
    images: [],
    creator: {
      customer_id : ""
    },
    interestedCustomers: []
  };

  constructor(private usersService: UsersService, private postsService: PostsService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.renderPage();
  }

  returnToLastPage() {
    this.location.back();
  }

  onClickBookMark() {
    this.postsService.bookMarkPost(this.currentPost.post_id).subscribe(response => {
      this.router.navigate(['/bookmarked-posts']);
    });
  }

  onClickUnBookMark() {
    this.postsService.unBookMarkPost(this.currentPost.post_id).subscribe(response => {
      this.router.navigate(['/bookmarked-posts']);
    })
  }

  onClickInterest() {
    this.postsService.interestPost(this.currentPost.post_id).subscribe(response => {
      this.interested = true;
      this.renderPage();
    })
  }

  onClickUnInterest() {
    this.postsService.unInterestPost(this.currentPost.post_id).subscribe(response => {
      this.interested = false;
      this.renderPage();
    })
  }

  renderPage() {
    this.postsService.getPostById(this.route.snapshot.params['id']).subscribe(response => {
      this.currentPost = {
        ...response,
        latitude: Number(response.latitude),
        longitude: Number(response.longitude)
      };
      this.loaded = true;
      this.currentPost.images = [];
      if (this.currentPost['image_link_one'] != "") {
        this.currentPost.images.push({
          className: ['carousel-item', 'active'],
          url: this.currentPost['image_link_one']
        })
      };
      if (this.currentPost['image_link_two'] != "") {
        this.currentPost.images.push({
          className: ['carousel-item'],
          url: this.currentPost['image_link_two']
        })
      };
      if (this.currentPost['image_link_three'] != "") {
        this.currentPost.images.push({
          className: ['carousel-item'],
          url: this.currentPost['image_link_three']
        })
      };
      for (let user of this.currentPost.interestedCustomers) {
        if (user.customer_id == this.userId) {
          this.interested = true;
        }
      }

      this.usersService.getUserById().subscribe(response => {
        console.log(response);
        for (let post of response.bookmarkedPosts) {
          if (post.post_id == this.currentPost.post_id) {
            this.bookmarked = true;
          }
        }
      })
      console.log(this.currentPost);
    });
  }

}
