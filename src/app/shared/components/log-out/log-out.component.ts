import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/user/authentication.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }

}
