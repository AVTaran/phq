import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { ListModule } from '../model/list/list.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  list!: ListModule;

  constructor(private listService: ListService, private router: ActivatedRoute) {
    this.setList();
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['query']) {
        this.list.items = this.listService.getList().items
          .filter(item => item.link.name.toLowerCase().includes(params['query'].toLowerCase()));
      } else {
        this.list = this.listService.getList();
      }
    })
  }

  setList(){
    this.list = this.listService.getList();
  }
}
