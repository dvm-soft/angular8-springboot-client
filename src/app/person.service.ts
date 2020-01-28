import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

//  private baseUrl = 'http://localhost:8080';
  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {
  }

  getPerson(id: number): Observable<any> {
/*
    const header = {
      headers: new HttpHeaders()
        .set('Access-Control-Allow-Origin')
    }
*/
    return this.http.get(`${this.baseUrl}/person/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createPerson(person: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, person);
  }

  // tslint:disable-next-line:ban-types
  updatePerson(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/person/${id}`, value);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/person/${id}`, { responseType: 'text' });
  }

  getPersonsList(): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    const options = { headers, crossDomain: true, withCredentials: true };

    return this.http.get(`${this.baseUrl}/persons`, options) ;
  }}
