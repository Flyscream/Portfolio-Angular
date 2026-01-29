import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})  

export class Projets {
  constructorList = [
    { 
      name: 'Projet agricole', 
      image: 'photo/arduino.png', 
      description: "Durant ma dernière année de terminale, nous devions créer une robot agricole. Pour le faire marcher nous avons injecter du code en C sur une carte arduino. Durant ce travail de groupe, nous avions aussi imprimer les pièces les plus importantes du robot pour fonctionner. Pour mon oral de terminal, j'ai du le presenter devant un jury." 
    },
    { 
      name: 'IA pour Pac-Man', 
      image: 'photo/Pac-man.jpg',
      description: "En groupe, en utilisant le language python, nous devions créer une ia qui joue a notre place a pac-man. Sont but a été de faire le plus de points dans un temps impartie. Le projet a été realisé en quelques semaines en groupe de 4 personnes. il a fallut que nous fassions des recherches sur les algorithmes d'ia pour pouvoir le faire. Le projet a été un succès car nous avions finit dans les temps et l'ia fonctionnait plutot bien." 
    },
    
    { 
      name: 'Application JO', 
      image: 'photo/JO.jpg', 
      description: "Conception d'un logiciel pour organiser des Jeux Olympique. Ce projet liais le javascript/HTML/CSS et SQL. Dans ce projet nous devions gérer les athlètes, les équipes qui participaient aux jeux mais aussi aux résultats des différentes épreuves qui ce sont dérouller. L'application a été faite en groupe de 4 personnes et a duré plusieurs semaines. Ce projet a été realisé dans les temps et respectait le cahier des charges.x" 
    },

    { 
      name: 'Cave a Fromage', 
      image: 'photo/cave_a_fromage.jpg', 
      description: "Le but de ce petit projet consistait a faire en sorte de créer un site fixe qui invente une cave a fromage. Ce projet a été fait en groupe de 2 personnes et nous nous sommes répartis les différentes taches, pour mener a bien le projet." 
    }, 

    { 
      name: 'API Avion', 
      image: 'photo/imageAvion.png', 
      description: "Création d'une application web en utilisant une API. L'API en question nous permettait de récupérer des informations sur les avions en temps réel. Nous avons utilisé le HTML/CSS/Javascript pour faire cette application. Le projet a été fait en groupe de 3 personnes. 2 personnes s'occupaient de develloper l'application web, et le 3 eme personnes s'occupaient de chercher et de mettre en ligne le projet." 
    }, 
    
    { 
      name: 'Projet Clicker', 
      image: 'photo/click.png', 
      description: "La création du jeu clicker, est un projet de fin d'année de 1 ere année de BTS SIO. Le but du jeu était de créer un petit jeu en javaFx en utilisant Scenebuilder. Le jeu a été develloper en java ou le but est de cliquer sur un bouton pour gagner de l'argent et acheter des améliorations.Le projet a été un succès car j'ai réussi a faire un jeu fonctionnel et amusant." 
    },

    { 
      name: 'Projet Clicker', 
      image: '', 
      description: "Lors de mon stage de premiére année réalisé dans le service informatique du Crédit Agricole, j’ai développé un script combinant Java et VBA pour générer des fichiers de synthèse sur les migrations éffectuées. Ce projet m’a permis de découvrir le fonctionnement d’une grande entreprise, de m’adapter à ses exigences et de renforcer mon sens de l’initiative. Cette expérience a été particulièrement enrichissante sur le plan humain et professionnel." 
    }, 

    {
      name: 'Site Vitrine WordPress',
      image: '',
      description: ""
    }
  ];
}