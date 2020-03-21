import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from '../backend-address';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(formData) {
    return this.http.post<any>(backendUrl + "/register", formData, { observe: 'response' });
  }

  loginUser(formData) {
    return this.http.post<any>(backendUrl + "/login", formData, { observe: 'response' });
  }
}
