import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(formData) {
    return this.http.post<any>("http://localhost:8080/register", formData, { observe: 'response' });
  }

  loginUser(formData) {
    return this.http.post<any>("http://34.215.140.199:8090/revHousing/login", formData, { observe: 'response' });
  }
}