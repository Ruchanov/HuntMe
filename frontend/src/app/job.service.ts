import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  fetchJobListings(): Observable<any[]> {
    const url = `${this.apiUrl}/job_listings/`;
    return this.http.get<any[]>(url);
  }
}
