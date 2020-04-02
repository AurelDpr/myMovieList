import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from "../models/Users";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};

const baseUrl = 'https://mymovielist.northeurope.cloudapp.azure.com:8443/api/user';
// const baseUrl = 'http://localhost:9090/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUserByUsernameAndPassword(user): Observable<Users> {
    return this.http.post<Users>(baseUrl + '/login', user);
  }

  addUser(user): Observable<Users[]> {
    return this.http.post<Users[]>(baseUrl + '/create', user);
  }
}
