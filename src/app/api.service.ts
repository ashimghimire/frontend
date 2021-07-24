import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {config }from './auth_config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ping$(): Observable<any> {
    return this.http.post(`${config.apiUri}/api/`,{});
  }

  addBooking$(bookings:any): Observable<any> {
    return this.http.post(`${config.apiUri}/api/bookings`,bookings);
  }

  getBooking$(id:String): Observable<any> {
    return this.http.get(`${config.apiUri}/api/bookings/${id}`,);
  }

  getAmount$(bookings:Object): Observable<any> {
    return this.http.post(`${config.apiUri}/api/payments/amount`, bookings);
  }

  addPayment$(payments:Object): Observable<any> {
    return this.http.post(`${config.apiUri}/api/payments`, payments);
  }
}
