import { ListItem } from './list-item.model';

export class List {
  items: ListItem[] = [];
  itemPerPage: number = 3;

  get total(): number {
    return this.items.length;
  }
}
