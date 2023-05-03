import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component {

  mensaje:string = 'hola mundo desde ejemplo1'
  precio: number = 3.99;
}
