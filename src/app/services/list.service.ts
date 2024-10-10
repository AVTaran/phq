import { Injectable } from '@angular/core';
import { ListModule } from '../model/list/list.module';
import { ListItemModule } from '../model/list-item/list-item.module';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ListService {
  list: BehaviorSubject<ListModule> = new BehaviorSubject(new ListModule());
  currentPage: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor() {}

  addToList(ListItem: ListItemModule) {
    let newList: ListModule = this.list.getValue();
    newList.items.push(ListItem);
    this.list.next(newList);
  }

  changeCurrentPage(page: number) {
    this.currentPage.next(page);
  }
}
