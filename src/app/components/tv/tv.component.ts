import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  series: Array<any> = [];
  seriesList: Array<any> = [];
  type = 'tv';
  baseOriginalPosterPath = 'https://image.tmdb.org/t/p/original';
  baseLittlePosterPath = 'https://image.tmdb.org/t/p/w154';
  nbSerie = 10;

  constructor(
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filmService.getAllTvsByPopularity().subscribe(response => {
      this.seriesList = response['results'];
      this.series = this.seriesList.slice(0, this.nbSerie);
    });
  }

  openDetail(serie: any) {
    this.router.navigate(['/detail/' + this.type + '/' + serie.id]);
  }

  changeNbDisplay() {
    this.series = this.seriesList.slice(0, this.nbSerie);
  }

}
