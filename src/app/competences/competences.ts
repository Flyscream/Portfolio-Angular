import { Component, OnInit, inject, signal } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-competences',
  standalone: true, 
  imports: [CommonModule, RouterLink], 
  templateUrl: './competences.html',
  styleUrl: './competences.css',
})
export class Competences implements OnInit { 
  competencesList = signal<any[]>([]);
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<any[]>('data/competences.json').subscribe({
      next: (donnees) => {
        this.competencesList.set(donnees);
      },
      error: (err) => console.error('Erreur de chargement :', err)
    });
  }
}