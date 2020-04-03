import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/services/user/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  displayedColumns: string[] = ['username'];
  suppliers: User[] = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getSuppliers().pipe(first()).subscribe(users => {
      this.suppliers = users;
    });
  }
}
