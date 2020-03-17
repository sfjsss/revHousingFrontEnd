import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { CoordinateService } from 'src/app/services/coordinate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private postsService: PostsService, private coordinateService: CoordinateService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    const formValue = form.form.value;
    const formData = {
      title: formValue.title,
      rent: formValue.rent,
      address: formValue.address,
      zipcode: formValue.zipcode,
      description: formValue.description,
      image_link_one: formValue.image1Link,
      image_link_two: formValue.image2Link,
      image_link_three: formValue.image3Link
    };
    this.coordinateService.fetchCoordinates(formData.address, formData.zipcode).subscribe(response => {
      formData['latitude'] = response.results[0].geometry.location.lat;
      formData['longitude'] = response.results[0].geometry.location.lng;
      this.postsService.createPost(formData).subscribe(response => {
        if (response != null) {
          this.router.navigate(['my-posts']);
        }
      })
    });
  }

}
