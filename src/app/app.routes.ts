import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Competences } from './competences/competences';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'competences', component: Competences },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];