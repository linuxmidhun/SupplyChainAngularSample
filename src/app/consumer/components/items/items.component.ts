import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/supply/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
  }

}
