import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-stage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stage.html',
  styleUrl: './stage.css',
})
export class Stage {
  StageList = [

    {
      name: 'Projet Stage BNP Paribas',
      image: 'photo/BNP_Paribas.png',
      description: "Lors de mon stage de deuxième année au sein du service informatique de BNP Paribas, j'ai découvert le cycle de développement de l'application et du site web de la banque. J'ai notamment appris à utiliser le framework Angular, que j'ai mis en pratique pour réaliser différents projets. Par ailleurs, ma participation aux réunions d'équipe m'a permis d'appréhender les rouages de la communication en entreprise. Cette expérience a été très enrichissante, tant sur le plan technique qu'humain."
    },
    {
      name: 'Projet Stage Crédit Agricole',
      image: 'photo/Crédit_Agricole.svg',
      description: "Lors de mon stage de premiére année réalisé dans le service informatique du Crédit Agricole, j’ai développé un script combinant Java et VBA pour générer des fichiers de synthèse sur les migrations éffectuées. Ce projet m’a permis de découvrir le fonctionnement d’une grande entreprise, de m’adapter à ses exigences et de renforcer mon sens de l’initiative. Cette expérience a été particulièrement enrichissante sur le plan humain et professionnel."
    }
  ]

}
