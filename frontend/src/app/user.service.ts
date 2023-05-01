import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./models/user";
import {LoginResponse} from "./models/loginResponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<User> {
    const url = `${this.apiUrl}/register/`;
    return this.http.post<User>(url, userData);
  }

  login(userData: any): Observable<LoginResponse> {
    const url = `${this.apiUrl}/api/token/`;
    return this.http.post<LoginResponse>(url, userData);
  }

  getUserDetails(): Observable<User> {
    const url = `${this.apiUrl}/users/me/`;
    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
    return this.http.get<User>(url, { headers });
  }
  getUser(): Observable<User> {
    const url = `${this.apiUrl}/user/`;
    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
    return this.http.get<User>(url, { headers });
  }
}
