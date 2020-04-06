import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../../services/user/authentication.service';
import { AlertService } from '../../../services/common/alert.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    // tslint:disable-next-line:no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          switch (data.role) {
            case 'Consumer':
              if (this.returnUrl !== '' && this.returnUrl.includes('/consumer/')) {
                return this.router.navigate([this.returnUrl]);
              }
              return this.router.navigate(['/consumer/items']);
            case 'Supplier':
              if (this.returnUrl !== '' && this.returnUrl.includes('/supplier/')) {
                return this.router.navigate([this.returnUrl]);
              }
              return this.router.navigate(['/supplier/items']);
            case 'Admin':
              if (this.returnUrl !== '' && this.returnUrl.includes('/admin/')) {
                return this.router.navigate([this.returnUrl]);
              }
              return this.router.navigate(['/admin/items']);
            default:
              this.alertService.error('user type not defined');
              break;
          }
          // this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
        });
  }

  // private executeService(loginreq: LoginRequest) {
  //   this.router.navigate(['/consumer/items']);
  // }
}
