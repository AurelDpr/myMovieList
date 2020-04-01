import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {DetailComponent} from './components/detail/detail.component';
import {MovieComponent} from './components/movie/movie.component';
import {TvComponent} from './components/tv/tv.component';
import {ListComponent} from './components/list/list.component';
import {SearchComponent} from './components/search/search.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'tv', component: TvComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail/:type/:id', component: DetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
