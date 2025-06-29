import { ListItem } from './list-item.model';

export class List {
  items: ListItem[] = [];
  itemPerPage: number = 5;

  get total(): number {
    return this.items.length;
  }
}
