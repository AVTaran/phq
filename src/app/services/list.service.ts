import { Injectable } from '@angular/core';
import { LinkModule } from '../model/link/link.module';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() {}

  getAll(): LinkModule[] {
    return [
      { name: 'Google', url: 'google.com' },
      { name: 'Yandex', url: 'yandex.com' },
      { name: 'Baidu', url: 'baidu.com' },
    ];
  }
}
