import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./models/user";

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
}
