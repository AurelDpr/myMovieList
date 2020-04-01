import { Component, OnInit } from '@angular/core';
import {Users} from '../../models/Users';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {AlertService} from '../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser = new Users();

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.userService.addUser(this.newUser).subscribe(response => {
      this.alertService.tempAlert('Votre compte à été créé, vous pouvez maintenant vous connecter ', 5000, 'bg-success');
      this.router.navigate(['/login']);
    });
  }

}
