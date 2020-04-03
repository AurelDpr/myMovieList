import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  films: Array<any> = [];
  filmsList: Array<any> = [];
  type = 'movie';
  baseOriginalPosterPath = 'https://image.tmdb.org/t/p/original';
  baseLittlePosterPath = 'https://image.tmdb.org/t/p/w154';
  nbMovie = 10;

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filmService.getAllMoviesByPopularity().subscribe(response => {
      this.filmsList = response['results'];
      this.films = this.filmsList.slice(0, this.nbMovie);
    });
  }

  openDetail(film: any) {
    this.router.navigate(['/detail/' + this.type + '/' + film.id]);
  }

  changeNbDisplay() {
    this.films = this.filmsList.slice(0, this.nbMovie);
  }
}
