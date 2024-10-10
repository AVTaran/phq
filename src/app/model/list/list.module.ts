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

  get total(): number {
    return this.items.length;
  }
}
