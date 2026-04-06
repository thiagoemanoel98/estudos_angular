import {
  Component,
  EventEmitter,
  Input,
  input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnChanges {
  @Input() title: string = ''; // Receber title

  // Valor que sera emitido para o componente pai
  @Output() emitText = new EventEmitter<string>();

  tipoUsuario: 'feliz' | 'legal' = 'feliz';

  usuarios = [
    {
      id: 0,
      name: 'Thiago 😎',
    },
    {
      id: 1,
      name: 'Jamilly 😁',
    },
  ];

  // Disparado toda vez que o valor do input mudar
  ngOnChanges(changes: SimpleChanges): void {}

  emitValue() {
    this.emitText.emit('Texto do componente filho');
  }
}
