import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  createuser(formData) {
    return this.http.post<any>('http://localhost:8080/users', formData, { observe: 'response' });
  }
  getUserById() {
    return this.http.get<any>(`http://localhost:8080/users/3`, { responseType: 'json' });
  }

  updateUser(formData) {
    return this.http.put<any>("http://localhost:8080/users", formData, { observe: 'response' });
  }

}