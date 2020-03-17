import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {
  // private apiKey = 'AIzaSyC31fPvxdguqVUnokZKGqe_GSwhnIjv-go';
  private apiKey = "AIzaSyDdU7KMs5IfYmqJXmYZc8MzL_8fN3z5Hec";

  constructor(private http: HttpClient) { }

  fetchCoordinates(address: string, zipcode: string) {
    let splittedAddress = address.split(' ');
    let joinedAddress = splittedAddress.join('+');
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${joinedAddress}+${zipcode}&key=${this.apiKey}`;
    console.log(url);
    return this.http.get<any>(url);
  }
}
