import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurante';
}

restaurante: Irestaurante = {
  name: 'Marisqueria',
  address: 'corazon de maria',
  phone: 123456789
}