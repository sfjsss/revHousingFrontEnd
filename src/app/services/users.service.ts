import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserById() {
    return this.http.get<any>(`http://localhost:8080/users/${sessionStorage.getItem("userId")}`, { responseType: 'json' });
  }

  updateUser(formData) {
    return this.http.put<any>("http://localhost:8080/users", formData, { observe: 'response' });
  }
}
