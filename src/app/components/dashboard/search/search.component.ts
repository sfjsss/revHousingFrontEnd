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
  searchResult: any[] = [];

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
