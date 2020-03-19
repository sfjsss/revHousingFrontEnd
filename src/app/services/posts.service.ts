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

  getPostById(id) {
    return this.http.get<any>(`http://localhost:8080/posts/${id}`, {responseType: 'json'});
  }

  bookMarkPost(postId) {
    return this.http.get<any>(`http://localhost:8080/posts/bookmark?userId=3&postId=${postId}`);
  }

  unBookMarkPost(postId) {
    return this.http.get<any>(`http://localhost:8080/posts/unbookmark?userId=3&postId=${postId}`);
  }

  getPostsByUserId() {
    return this.http.get<any>(`http://localhost:8080/posts/user/3`, { responseType: 'json' });
  }

  deletePostById(postId) {
    return this.http.delete<any>(`http://localhost:8080/posts/${postId}`);
  }

  updatePost(formData) {
    return this.http.put<any>("http://localhost:8080/posts", formData, { observe: 'response' });
  }
}