import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-document-card', 
  standalone: true,
  templateUrl: './document-card.html'
})
export class DocumentCardComponent {
  public title = input<string>('');    
  public imageSrc = input<string>('');  
  public fileUrl = input<string>('');
}