import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/services/user/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.scss']
})
export class ConsumerListComponent implements OnInit {

  displayedColumns: string[] = ['username'];
  consumers: Array<User> = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getConsumers().pipe(first()).subscribe(users => {
      this.consumers = users;
      console.log(this.consumers);
    });
  }

}
