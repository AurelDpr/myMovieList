import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
};

const apiKey = '5bd0a5e5f57e4cc0484164e35e32e3b3'
const baseUrl = 'https://api.themoviedb.org/3';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  constructor(private http: HttpClient) { }

  getAllMoviesByPopularity(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + '/discover/movie?sort_by=popularity.desc&region=FR&language=fr-FR&api_key=' + apiKey);
  }

  getAllTvsByPopularity(): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + '/discover/tv?sort_by=popularity.desc&region=FR&language=fr-FR&api_key=' + apiKey);
  }

  getMovieById(id): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + '/movie/' + id + '?region=FR&language=fr-FR&api_key=' + apiKey);
  }

  getTvById(id): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + '/tv/' + id + '?region=FR&language=fr-FR&api_key=' + apiKey);
  }
}
