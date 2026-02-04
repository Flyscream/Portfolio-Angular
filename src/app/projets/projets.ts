import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets implements OnInit {

  projets = signal<any[]>([]);

  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<any[]>('data/projets.json').subscribe({
      next: (donnees) => {
        this.projets.set(donnees);
      },
      error: (err) => console.error('Erreur de chargement :', err)
    });
  }
}