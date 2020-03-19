import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CoordinateService } from 'src/app/services/coordinate.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  currentPost = {
    title: "",
    rent: "",
    address: "",
    zipcode: "",
    description: "",
    image_link_one: "",
    image_link_two: "",
    image_link_three: "",
    latitude: "",
    longitude: ""
  }
  post_id = this.route.snapshot.params['id'];

  constructor(private postsService: PostsService, private route: ActivatedRoute, private coordinateService: CoordinateService, private router: Router) { }

  ngOnInit(): void {
    this.postsService.getPostById(this.post_id).subscribe(response => {
      console.log(response);
      this.currentPost = response;
    })
  }

  onSubmit() {
    this.coordinateService.fetchCoordinates(this.currentPost.address, this.currentPost.zipcode).subscribe(response => {
      this.currentPost.latitude = response.results[0].geometry.location.lat;
      this.currentPost.longitude = response.results[0].geometry.location.lng;
      this.postsService.updatePost(this.currentPost).subscribe(response => {
        this.router.navigate([`/view-post/${this.post_id}`]);
      })
    })
  }

}
