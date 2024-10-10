import { Component } from '@angular/core';
import { Link } from '../model/link.model';
import { ListService } from '../services/list.service';
import { ListItem } from '../model/list-item.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(private listService: ListService) { }

  addLinkToList(name: string, url: string): void {
    const link = new Link(name, url);
    this.listService.addToList(new ListItem(link))
  }
}
