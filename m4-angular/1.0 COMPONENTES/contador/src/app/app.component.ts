import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'contador';
}

export class ContadorComponet {

  contador: number = 0;

  incrementar(): void {
    this.contador++;

  }

  resetear(): void {
    this.contador = 0;
  }
}
