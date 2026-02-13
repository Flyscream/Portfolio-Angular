import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  tickets = signal<any[]>([]);

  ngOnInit() {
    this.chargerTickets();
  }

  chargerTickets() {
    const save = localStorage.getItem('messages');
    if (save) {
      this.tickets.set(JSON.parse(save));
    }
  }

  supprimerTicket(id: number) {
    const MiseAJour = this.tickets().filter((ticket) => ticket.ID !== id);
    localStorage.setItem('messages', JSON.stringify(MiseAJour));
    this.tickets.set(MiseAJour);
  }

  exporterEnJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.tickets()));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "messages_portfolio.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}
