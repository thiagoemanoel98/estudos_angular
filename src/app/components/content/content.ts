import { Component, inject } from '@angular/core';
import { Storage } from '../../services/storage';

// seletor usado para referenciar o componente no html
@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  readonly _storageService = inject(Storage);
}
