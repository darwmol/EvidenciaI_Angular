import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  palabra: string = '';
  resultado: string | null = null;

  validarCapicua() {
    const tamano = this.palabra.length;
    let esCapicua = true;

    for (let i = 0; i < tamano; i++) {
      if (this.palabra[i] !== this.palabra[tamano - 1 - i]) {
        esCapicua = false;
        break;
      }
    }

    if (esCapicua) {
      this.resultado = `"${this.palabra}" es capicúa.`;
    } else {
      this.resultado = `"${this.palabra}" no es capicúa.`;
    }
  }
}
