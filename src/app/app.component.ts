import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isConnected() {
    return localStorage.getItem('user') !== null;
  }

  disconnect() {
    localStorage.removeItem('user');
  }
}
