import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  createPost(formData) {
    return this.http.post<any>('http://localhost:8080/posts', formData, {observe:'response'});
  }

  getPostsByZipcode(zipcode) {
    return this.http.get<any>(`http://localhost:8080/posts?zipcode=${zipcode}`, {responseType: 'json'});
  }
}
