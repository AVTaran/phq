import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemModule } from '../list-item/list-item.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ListModule {
  items: ListItemModule[] = [];
  itemPerPage: number = 3;

  get total(): number {
    return this.items.length;
  }
}
