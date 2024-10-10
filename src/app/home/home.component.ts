import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListModule } from '../model/list/list.module';
import { PaginationComponent } from '../pagination/pagination.component';
import { ListItemModule } from '../model/list-item/list-item.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  list!: ListModule;
  currentPage!: number;
  showItems!: ListItemModule[];

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
