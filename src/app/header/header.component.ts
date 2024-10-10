import { Component } from '@angular/core';
import { LinkModule } from '../model/link/link.module';
import { ListService } from '../services/list.service';
import { ListItemModule } from '../model/list-item/list-item.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(private listService: ListService) { }

  addToTheList(name: string, url: string): void {
    let link = new LinkModule(name, url);
    this.listService.addToList(new ListItemModule(link))
  }
}
