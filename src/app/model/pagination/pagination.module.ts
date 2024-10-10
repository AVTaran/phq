import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class PaginationModule {
  prev: number = -1;
  next: number = -1;
  amountPages: number = 1;
  idsPages: number[] = [];
}
