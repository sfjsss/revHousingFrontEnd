import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  createuser(formData) {
    return this.http.post<any>('http://localhost:8080/users', formData, { observe: 'response' });
  }

}