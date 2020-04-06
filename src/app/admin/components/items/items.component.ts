import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/_models/item';
import { ItemService } from 'src/app/services/supply/item.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'delete'];
  items: Item[] = [];
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.loadAllItems();
  }

  deleteItem(id: number) {
    this.itemService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllItems();
    });
  }

  loadAllItems() {
    this.itemService.getAll().pipe(first()).subscribe(items => {
      this.items = items;
    });
  }
}
