import { Component, OnInit } from '@angular/core';
import {FilmService} from "../../services/film.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue = '';
  films: Array<any> = [];
  series: Array<any> = [];
  baseLittlePosterPath = 'https://image.tmdb.org/t/p/w154';

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  search() {
    this.films = [];
    this.series = [];
    this.filmService.searchMovieByName(this.searchValue).subscribe(response => {
      const result = response['results'].filter(item => item.poster_path !== null);
      result.forEach(item => {
        this.films.push(item);
      });
    });
    this.filmService.searchTvByName(this.searchValue).subscribe(response => {
      const result = response['results'].filter(item => item.poster_path !== null);
      result.forEach(item => {
        this.series.push(item);
      });
    });
  }

  openDetail(film: any, type: string) {
    this.router.navigate(['/detail/' + type + '/' + film.id]);
  }

}
