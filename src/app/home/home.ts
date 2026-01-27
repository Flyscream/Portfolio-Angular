import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DocumentCardComponent } from '../shared/components/document-card/document-card'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DocumentCardComponent], 
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}