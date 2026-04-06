import { Injectable } from '@angular/core';

// providedIn: 'root' -> instancia unica da aplicacao toda )
// Bom para guardar o contexto da aplicação
@Injectable({
  providedIn: 'root',
})
export class Storage {
  currentUser = 'Thiago';

  updateCurrentUser() {
    this.currentUser = 'Jamilly';
  }
}
