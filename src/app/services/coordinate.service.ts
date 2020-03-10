import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {
  private apiKey = 'AIzaSyC31fPvxdguqVUnokZKGqe_GSwhnIjv-go';

  constructor(private http: HttpClient) { }

  fetchCoordinates(address: string) {
    let splittedAddress = address.split(' ');
    let joinedAddress = splittedAddress.join('+');
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?address=${joinedAddress}&key=${this.apiKey}`)
  }
}
