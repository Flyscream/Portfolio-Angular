import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-document-card', 
  standalone: true,
  templateUrl: './document-card.html'
})
export class DocumentCardComponent {
  @Input() title: string = '';    
  @Input() imageSrc: string = '';
  @Input() fileUrl: string = '';
}