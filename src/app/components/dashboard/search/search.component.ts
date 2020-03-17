import { Component, OnInit } from '@angular/core';
import { CoordinateService } from 'src/app/services/coordinate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  lat: number = 32.727344;
  lng: number = -97.105981;
  zoom: number = 5;
  searchResult: any[] = [
    {
      name: 'UTA',
      lat: 32.731195,
      lng: -97.112073
    },
    {
      name: 'Carter Junior High',
      lat: 32.724404,
      lng: -97.100474
    }
  ];

  constructor(private coordinateService: CoordinateService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.retrieveCoordinates(form.form.value.address, form.form.value.zipcode);
  }

  retrieveCoordinates(address: string, zipcode: string) {
    this.coordinateService.fetchCoordinates(address, zipcode).subscribe(coordinates => {
      this.lat = coordinates.results[0].geometry.location.lat;
      this.lng = coordinates.results[0].geometry.location.lng;
    });
  }

}
