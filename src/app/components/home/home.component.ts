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
  type = 'film';
  baseOriginalPosterPath = 'https://image.tmdb.org/t/p/original';
  baseLittlePosterPath = 'https://image.tmdb.org/t/p/w185';

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filmService.getAllMoviesByPopularity().subscribe(response => {
      this.films = response['results'];
      console.log(this.films);
    });
  }

  openDetail(film: any) {
    this.router.navigate(['/detail/' + this.type + '/' + film.id]);
  }

}
