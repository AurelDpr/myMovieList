import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list.service';
import {Router} from "@angular/router";
import {Movies} from "../../models/Movies";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listes: Array<any> = [];
  baseOriginalPosterPath = 'https://image.tmdb.org/t/p/original';
  baseLittlePosterPath = 'https://image.tmdb.org/t/p/w154';

  constructor(
    private listService: ListService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listService.getMovieByUserId(JSON.parse(localStorage.getItem('user')).id).subscribe(response => {
      this.listes = response;
      console.log(this.listes);
    });
    // this.listes = JSON.parse(localStorage.getItem('list'));
  }

  openDetail(film: Movies) {
    this.router.navigate(['/detail/' + film.type + '/' + film.movieId]);
  }
}
