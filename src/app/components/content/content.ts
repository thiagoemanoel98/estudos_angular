import { Component, inject } from '@angular/core';
import { IPost, JsonPlaceholder } from '../../services/json-placeholder';

// seletor usado para referenciar o componente no html
@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  postsList: IPost[] = [];
  readonly _jsonPlaceholderService = inject(JsonPlaceholder);

  // Executado quando componente é renderizado
  ngOnInit() {
    this._jsonPlaceholderService.getPosts().subscribe((response) => {
      console.log(response);
      this.postsList = response;
    });
  }
}
