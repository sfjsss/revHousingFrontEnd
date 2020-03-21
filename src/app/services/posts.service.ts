import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from '../backend-address';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  createPost(formData) {
    return this.http.post<any>(backendUrl + "/posts", formData, {observe:'response'});
  }

  getPostsByZipcode(zipcode) {
    return this.http.get<any>(backendUrl + `/posts?zipcode=${zipcode}`, {responseType: 'json'});
  }

  getPostById(id) {
    return this.http.get<any>(backendUrl + `/posts/${id}`, {responseType: 'json'});
  }

  bookMarkPost(postId) {
    return this.http.get<any>(backendUrl + `/posts/bookmark?userId=${sessionStorage.getItem("userId")}&postId=${postId}`);
  }

  unBookMarkPost(postId) {
    return this.http.get<any>(backendUrl + `/posts/unbookmark?userId=${sessionStorage.getItem("userId")}&postId=${postId}`);
  }

  getPostsByUserId() {
    return this.http.get<any>(backendUrl + `/posts/user/${sessionStorage.getItem("userId")}`, { responseType: 'json' });
  }

  deletePostById(postId) {
    return this.http.delete<any>(backendUrl + `/posts/${postId}`);
  }

  updatePost(formData) {
    return this.http.put<any>(backendUrl + "/posts", formData, { observe: 'response' });
  }

  interestPost(postId) {
    return this.http.get<any>(backendUrl + `/posts/interest?userId=${sessionStorage.getItem("userId")}&postId=${postId}`, { responseType: 'json' });
  }

  unInterestPost(postId) {
    return this.http.get<any>(backendUrl + `/posts/uninterest?userId=${sessionStorage.getItem("userId")}&postId=${postId}`, { responseType: 'json' });
  }
}
