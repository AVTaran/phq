import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { NgForOf, NgIf } from '@angular/common';
import { PaginationModule } from '../model/pagination/pagination.module';
import { ListModule } from '../model/list/list.module';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})

export class PaginationComponent {
  list: ListModule = new ListModule();
  pagination!: PaginationModule;
  currentPage: number = 1;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.list.subscribe(l => {
      this.list = l;
      this.setPagination();
    });

    this.listService.currentPage.subscribe(cp => {
      this.currentPage = cp;
      this.setPagination();
    });
  }

  setPagination() {
    const totalItems: number = this.list.items.length;
    const amountPages: number = Math.ceil(totalItems / this.list.itemPerPage);

    let paginationIds: number[] = [];
    if (amountPages > 1) {
      if (this.currentPage > 1) {
        paginationIds.push(this.currentPage - 1);
      }

      paginationIds.push(this.currentPage);

      if (this.currentPage < amountPages) {
        paginationIds.push(this.currentPage + 1);
      }
    }

    this.pagination = {
      prev: this.currentPage > 1 ? this.currentPage - 1 : -1,
      next: this.currentPage < amountPages ? this.currentPage + 1 : -1,
      amountPages: amountPages,
      idsPages: paginationIds,
    };
  }

  changePage(page: number) {
    this.listService.changeCurrentPage(page);
  }
}
