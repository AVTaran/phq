import { Injectable } from '@angular/core';
import { ListModule } from '../model/list/list.module';
import { ListItemModule } from '../model/list-item/list-item.module';


@Injectable({
  providedIn: 'root'
})

export class ListService {
  private list: ListModule = new ListModule();

  constructor() {}

  addToList(ListItem: ListItemModule) {
    this.list.items.push(ListItem);
  }

  getList() {
    return this.list;
  }
}
