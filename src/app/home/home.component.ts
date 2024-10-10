import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { ListModule } from '../model/list/list.module';
import { PaginationComponent } from '../pagination/pagination.component';
import { ListItemModule } from '../model/list-item/list-item.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  list!: ListModule;
  currentPage!: number;
  showItems!: ListItemModule[];

  constructor(private listService: ListService, private router: ActivatedRoute) { }

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

    this.router.params.subscribe(params => {
      if(params['query']) {
        this.showItems = this.showItems
          .filter(item => item.link.name.toLowerCase().includes(params['query'].toLowerCase()));
      }
    });

    const startIndex = (this.currentPage - 1) * this.list.itemPerPage;
    this.showItems = this.showItems.slice(startIndex, startIndex + this.list.itemPerPage);
  }
}
