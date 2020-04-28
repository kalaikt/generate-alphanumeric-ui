import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GenerateAlphanumericService {

  constructor( private http: HttpClient) { }

  getResponse(telephone: string, pageNumber: number): Observable<Response> {
    const url = `${environment.endpoint.baseUrl}${environment.endpoint.generateAlphanumeric}${telephone}/${pageNumber}`;
    return this.http.get<Response>(url);
  }
}
