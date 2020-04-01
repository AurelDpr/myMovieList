import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';
import {UserService} from '../../services/user.service';
import {Users} from '../../models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new Users();

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  login() {
    this.userService.getUserByUsernameAndPassword(this.user).subscribe(response => {
      if (response === null) {
        this.alertService.tempAlert('Identifiant ou mot de passe invalide', 5000, 'bg-danger');
      } else {
        localStorage.setItem('user', JSON.stringify(response));
        this.alertService.tempAlert('Vous êtes connecté', 5000, 'bg-success');
        this.router.navigate(['/home']);
      }
    });
  }

}
