import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from 'src/app/_models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Item[]>('/items');
  }

  add(item: Item) {
    return this.http.post('/items', item);
  }

  delete(id: number) {
    return this.http.delete(`/items/${id}`);
  }

  getFeaturedItems() {
    return this.http.get<Item[]>('/items/featured');
  }
}
