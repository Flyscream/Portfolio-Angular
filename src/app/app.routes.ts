import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Competences } from './competences/competences';
import { Projets } from './projets/projets';
import { Stage } from './stage/stage';
import { Contact } from './contact/contact';
import { Admin } from './admin/admin';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'competences', component: Competences },
  { path: 'projets', component: Projets },
  { path: 'stage', component: Stage },
  { path: 'contact', component: Contact },
  { path: 'admin', component: Admin },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];