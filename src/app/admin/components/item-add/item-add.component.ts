import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/common/alert.service';
import { ItemService } from 'src/app/services/supply/item.service';
import { AuthenticationService } from 'src/app/services/user/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {
  itemForm: FormGroup;
  submitted = false;
  activeUser: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService,
    // private authenticationService: AuthenticationService,
    private itemService: ItemService
  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/auth/login']);
    // }
  }

  ngOnInit() {
    this.activeUser = localStorage.currentUserName;
    this.itemForm = this.formBuilder.group({
      name: ['', Validators.required],
      creataedby: [this.activeUser, Validators.required],
      featured: [false, Validators.required]
    });

  }

  get f() { return this.itemForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.itemForm.value);
    // stop here if form is invalid
    if (this.itemForm.invalid) {
      return;
    }

    this.itemService.add(this.itemForm.value).pipe(first()).subscribe(
      data => {
        this.router.navigate(['/admin/items']);
      },
      error => {
        this.alertService.error(error);
      });
  }

}
