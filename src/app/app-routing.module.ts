import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {DetailComponent} from './components/detail/detail.component';
import {MovieComponent} from './components/movie/movie.component';
import {TvComponent} from './components/tv/tv.component';
import {ListComponent} from './components/list/list.component';

const routes: Routes = [
  { path: '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'tv', component: TvComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail/:type/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
