import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  nom = signal('');
  prenom = signal('');
  email = signal('');
  sujet = signal('');
  message = signal('');

  envoieReussi = signal(false);

  envoyerFormulaire(){
    const nouveauMessage = {
      ID: Date.now(), 
      nom: this.nom(),
      prenom: this.prenom(),
      email: this.email(),
      sujet: this.sujet(),
      message: this.message(),
      date: new Date().toISOString(),
    };

    const save = localStorage.getItem('messages');
    const messages = save ? JSON.parse(save) : [];
    messages.push(nouveauMessage);
    localStorage.setItem('messages', JSON.stringify(messages));

    /*this.envoiReussi.set(true);
    this.nom.set('');
    this.email.set('');
    this.sujet.set('');
    this.message.set('');

    setTimeout(() => this.envoiReussi.set(false), 5000);
    
    console.log('Fichier JSON mis à jour dans le LocalStorage !', messages);*/
  }
}
  