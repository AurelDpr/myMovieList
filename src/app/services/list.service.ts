import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from "../models/Users";
import {Movies} from "../models/Movies";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};

const baseUrl = 'https://mymovielist.northeurope.cloudapp.azure.com:8443/api/movie';
// const baseUrl = 'http://localhost:9090/movie';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http: HttpClient) { }

  addMovie(movie): Observable<Movies[]> {
    return this.http.post<Movies[]>(baseUrl + '/create', movie);
  }

  deleteMovie(movieId): Observable<Movies> {
    return this.http.delete<Movies>(baseUrl + '/delete?movieId=' + movieId);
  }

  getMovieByUserId(userId): Observable<Movies[]> {
    return this.http.get<Movies[]>(baseUrl + '/get?userId=' + userId);
  }
}
