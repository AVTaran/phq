import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { CommonModule } from '@angular/common';
import { List } from '../model/list.model';
import { PaginationComponent } from '../pagination/pagination.component';
import { ListItem } from '../model/list-item.model';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PaginationComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  list!: List;
  currentPage!: number;
  showItems!: ListItem[];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.list.subscribe(list => {
      this.list = list;
      this.setShowItems();
    });
    this.listService.currentPage.subscribe(cp => {
      this.currentPage = cp;
      this.setShowItems();
    });
  }

  setShowItems() {
    this.showItems = this.list.items;

    const startIndex = (this.currentPage - 1) * this.list.itemPerPage;
    this.showItems = this.showItems.slice(startIndex, startIndex + this.list.itemPerPage);
  }
}
