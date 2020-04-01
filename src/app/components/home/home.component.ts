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
  series: Array<any> = [];
  baseOriginalPosterPath = 'https://image.tmdb.org/t/p/original';
  baseLittlePosterPath = 'https://image.tmdb.org/t/p/w154';

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filmService.getAllMoviesByPopularity().subscribe(response => {
      this.films = response['results'].slice(0, 10);
    });
    this.filmService.getAllTvsByPopularity().subscribe(response => {
      this.series = response['results'].slice(0, 10);
    });
  }

  openDetail(film: any, type: string) {
    this.router.navigate(['/detail/' + type + '/' + film.id]);
  }

}
