import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SubmitPageComponent} from './submit-page/submit-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'submit', component: SubmitPageComponent },
];
