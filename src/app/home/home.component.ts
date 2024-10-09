import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { CommonModule } from '@angular/common';
import { LinkModule } from '../model/link/link.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  listLinks: LinkModule[] = [];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listLinks = this.listService.getAll();
  }

}
