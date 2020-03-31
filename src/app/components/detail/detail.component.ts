import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmService} from '../../services/film.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  film: any;
  baseOriginalPosterPath = 'https://image.tmdb.org/t/p/original';
  baseLittlePosterPath = 'https://image.tmdb.org/t/p/w185';

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.filmService.getMovieById(this.id).subscribe(response => {
      this.film = response;
    });
  }

}
