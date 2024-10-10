import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from '../link/link.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ListItemModule {
  link: LinkModule;

  constructor(link: LinkModule) {
    this.link = link;
  }
}
