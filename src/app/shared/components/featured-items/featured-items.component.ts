import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/supply/item.service';
import { Item } from 'src/app/_models/item';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.scss']
})
export class FeaturedItemsComponent implements OnInit {
  featured: Item[] = [];
  isWithItems = false;
  loading = true;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.getFeaturedItems().pipe(first()).subscribe(items => {
      this.featured = items;
      this.isWithItems = this.featured.length > 0 ? true : false;
      this.loading = false;
    });
  }

}
