import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(formData) {
    return this.http.post<any>("http://localhost:8080/users", formData, { observe: 'response' });
  }
}
