import { Component } from '@angular/core';
import { Link } from '../model/link.model';
import { ListService } from '../services/list.service';
import { ListItem } from '../model/list-item.model';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormBuilder
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { LinkService } from '../services/link.service';
import { linkUrlValidatorFactory } from '../services/link-url-validation.factory';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  linkForm: FormGroup;

  constructor(private fb: FormBuilder, private listService: ListService, private linkService: LinkService) {
    this.linkForm = this.fb.group({
      linkName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      linkUrl: new FormControl('', [
        Validators.required,
        linkUrlValidatorFactory(this.linkService),
      ]),
    });
  }

  addLinkToList(name: string, url: string): void {
    const link = new Link(name, url);
    this.listService.addToList(new ListItem(link))
  }
}
