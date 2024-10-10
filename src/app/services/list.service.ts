import { Injectable } from '@angular/core';
import { List } from '../model/list.model';
import { ListItem } from '../model/list-item.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ListService {
  list: BehaviorSubject<List> = new BehaviorSubject(new List());
  currentPage: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor() {}

  addToList(ListItem: ListItem) {
    let newList: List = this.list.getValue();
    newList.items.push(ListItem);
    this.list.next(newList);
  }

  changeCurrentPage(page: number) {
    this.currentPage.next(page);
  }
}
