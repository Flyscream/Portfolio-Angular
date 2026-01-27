import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-competences',
  standalone: true, 
  imports: [CommonModule, RouterLink], 
  templateUrl: './competences.html',
  styleUrl: './competences.css',
})
export class Competences {
  competencesList = [
    { title: 'Python', desc: 'IA Pacman, gestion de données, gestion de serveur.', level: 80 },
    { title: 'HTML', desc: 'Sites internet pour des projets scolaires.', level: 75 },
    { title: 'CSS', desc: 'Stylisation de pages, animations de pages.', level: 66 },
    { title: 'JavaScript', desc: 'Gestion des clients, Bot Discord.js, jeux vidéo.', level: 40 },
    { title: 'Java', desc: "Implémentation front-end et back-end d'un logiciel.", level: 75 },
    { title: 'SQL', desc: 'Gestion et communication avec les bases de données.', level: 35 },
    { title: 'C++', desc: 'Utilisation de C++ pour des projets scolaires.', level: 30 },
    { title: 'VBA', desc: 'Stage de 1ère année BTS SIO.', level: 40 },
    { title: 'PHP', desc: 'Utilisation du PHP dans mon cursus scolaire.', level: 60 },
    { title: 'WordPress', desc: "Création d'un site vitrine.", level: 50 },
    { title: 'Arduino', desc: 'Feux de circulation, gestion matériel et logiciel.', level: 25 },
    { title: 'Angular', desc: 'Applications web dynamiques (Stage 2ème année).', level: 25 },
    { title: 'VS Code', desc: 'Outil principal de développement.', level: 25 },
    { title: 'IntelliJ IDEA', desc: 'Projets académiques et stages.', level: 25 },
    { title: 'GitHub', desc: 'Centralisation des projets.', level: 25 }
  ];
}