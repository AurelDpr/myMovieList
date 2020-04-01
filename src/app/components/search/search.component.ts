import { Component, OnInit } from '@angular/core';
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue = '';
  resultList: Array<any> = [];

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
  }

  search() {
    console.log(this.searchValue);
    this.resultList = [];
    // this.filmService.searchByName(this.searchValue).subscribe(response => {
    //   console.log(response);
    //   this.resultList.push(response);
    // });
  }

}
