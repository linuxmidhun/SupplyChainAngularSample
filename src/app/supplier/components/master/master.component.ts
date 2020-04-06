import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {
  activeUser: string;
  constructor() { }

  ngOnInit() {
    this.activeUser = localStorage.currentUserName;
  }

}
