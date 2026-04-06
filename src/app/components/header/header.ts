import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  HeaderTitle = 'YouTube';
  InputValue = 'Valor inicial';
  ApplyClass = false;
  colorStyle = 'orange';

  updateTitle() {
    // this.HeaderTitle = 'Thiago';
    console.log(this.InputValue);
    this.ApplyClass = true;
  }
}
