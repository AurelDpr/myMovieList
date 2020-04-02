import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmService} from '../../services/film.service';
import {Movies} from '../../models/Movies';
import {ListService} from '../../services/list.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  type: string;
  film: any;
  list: Array<any> = [];
  baseOriginalPosterPath = 'https://image.tmdb.org/t/p/original';
  baseLittlePosterPath = 'https://image.tmdb.org/t/p/w185';

  constructor(
    private filmService: FilmService,
    private listService: ListService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.type = this.route.snapshot.paramMap.get('type');

    if (JSON.parse(localStorage.getItem('list')) !== null) {
      this.list = JSON.parse(localStorage.getItem('list'));
    } else {
      this.listService.getMovieByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe(response => {
        this.list = response;
        localStorage.setItem('list', JSON.stringify(this.list));
      });
    }

    switch (this.type) {
      case 'movie':
        this.filmService.getMovieById(this.id).subscribe(response => {
          this.film = response;
        });
        break;
      case 'tv':
        this.filmService.getTvById(this.id).subscribe(response => {
          this.film = response;
        });
        break;
    }

  }

  isConnected() {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

  addToList() {
    let title;
    const userId = JSON.parse(localStorage.getItem('user')).id;
    switch (this.type) {
      case 'movie':
        title = this.film.title;
        break;
      case 'tv':
        title = this.film.name;
        break;
    }
    const movie = new Movies(userId, this.film.id, title, this.film.poster_path);
    this.listService.addMovie(movie).subscribe(response => {
      this.list.push(response);
      localStorage.setItem('list', JSON.stringify(this.list));
    });
  }

  removeToList() {
    this.listService.deleteMovie(this.list.filter( item => item.movieId === this.film.id )[0].id).subscribe(response => {
      this.list = this.list.filter( item => item.movieId !== this.film.id );
      localStorage.setItem('list', JSON.stringify(this.list));
    });
  }

  isInList() {
    return this.list.filter( item => item.movieId === this.id ).length > 0;
  }

}
