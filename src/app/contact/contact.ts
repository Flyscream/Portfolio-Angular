import { Component, signal, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { MessagesStore } from '../messages.store'; 
@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly store = inject(MessagesStore);

  nom = signal('');
  prenom = signal('');
  email = signal('');
  sujet = signal('');
  message = signal('');
  envoiReussi = signal(false);

  envoyerFormulaire() {
    const nouveauMessage = {
      ID: Date.now(), 
      nom: this.nom(),
      prenom: this.prenom(),
      email: this.email(),
      sujet: this.sujet(),
      message: this.message(),
      date: new Date().toLocaleString(), 
    };

    this.store.addMessage(nouveauMessage);

    this.envoiReussi.set(true);
    this.resetForm();
    setTimeout(() => this.envoiReussi.set(false), 5000);
  }

  private resetForm() {
    this.nom.set('');
    this.prenom.set('');
    this.email.set('');
    this.sujet.set('');
    this.message.set('');
  }
}