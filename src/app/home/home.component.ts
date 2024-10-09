import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { CommonModule } from '@angular/common';
import { LinkModule } from '../model/link/link.module';
import { ActivatedRoute, Router } from '@angular/router';
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  listLinks: LinkModule[] = [];

  constructor(private listService: ListService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['query']) {
        this.listLinks = this.listService.getAll()
          .filter(list => list.name.toLowerCase().includes(params['query'].toLowerCase()));
      } else {
        this.listLinks = this.listService.getAll();
      }
    })
  }

}
