import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from '../backend-address';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserById() {
    return this.http.get<any>(backendUrl + `/users/${sessionStorage.getItem("userId")}`, { responseType: 'json' });
  }

  updateUser(formData) {
    return this.http.put<any>(backendUrl + "/users", formData, { observe: 'response' });
  }
}
