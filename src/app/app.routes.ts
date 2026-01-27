import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Competences } from './competences/competences';
import { Projets } from './projets/projets';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'competences', component: Competences },
  { path: 'projets', component: Projets },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];