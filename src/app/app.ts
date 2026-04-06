import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Content } from './components/content/content';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Content],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('principais-funcionalidades');
  titleHeader = 'Titulo do header'; // Mandar pro componente header

  receiveValue(text: string) {
    console.log('Valor recebido: ', text);
  }
}
