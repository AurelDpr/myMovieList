import {Component, OnInit} from '@angular/core';
import {Users} from "./models/Users";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: Users;

  constructor() { }

  isConnected() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user !== null;
  }

  disconnect() {
    localStorage.removeItem('user');
  }
}
