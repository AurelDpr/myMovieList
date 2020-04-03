import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films: Array<any> = [];
  filmsList: Array<any> = [];
  series: Array<any> = [];
  seriesList: Array<any> = [];
  baseOriginalPosterPath = 'https://image.tmdb.org/t/p/original';
  baseLittlePosterPath = 'https://image.tmdb.org/t/p/w154';
  nbMovie = 10;
  nbSerie = 10;

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filmService.getAllMoviesByPopularity().subscribe(response => {
      this.filmsList = response['results'];
      this.films = this.filmsList.slice(0, this.nbMovie);
    });
    this.filmService.getAllTvsByPopularity().subscribe(response => {
      this.seriesList = response['results'];
      this.series = this.seriesList.slice(0, this.nbSerie);
    });
  }

  openDetail(film: any, type: string) {
    this.router.navigate(['/detail/' + type + '/' + film.id]);
  }

  changeNbDisplay() {
    this.series = this.seriesList.slice(0, this.nbSerie);
    this.films = this.filmsList.slice(0, this.nbMovie);
  }

}
