import { Component, OnInit } from '@angular/core';
import { CoordinateService } from 'src/app/services/coordinate.service';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  lat: number = 32.727344;
  lng: number = -97.105981;
  zoom: number = 15;
  searchResult: any[] = [
    {
      post_id: 1,
      title: 'UTA',
      rent: 500,
      latitude: 32.731195,
      longitude: -97.112073
    },
    {
      post_id: 2,
      title: 'Carter Junior High',
      rent: 1000,
      latitude: 32.724404,
      longitude: -97.100474
    }
  ];

  constructor(private coordinateService: CoordinateService, private postsService: PostsService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.retrieveCoordinates(form.form.value.address, form.form.value.zipcode);
    this.postsService.getPostsByZipcode(form.form.value.zipcode).subscribe(response => {
      this.searchResult = response;
    })
  }

  retrieveCoordinates(address: string, zipcode: string) {
    this.coordinateService.fetchCoordinates(address, zipcode).subscribe(coordinates => {
      this.lat = coordinates.results[0].geometry.location.lat;
      this.lng = coordinates.results[0].geometry.location.lng;
    });
  }

}
