import { Component } from '@angular/core';
import { ILaptop } from './laptop.model';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component {


  ordenador2: ILaptop = {
    fabricante: 'MSI',
    modelo: '500',
    ram: 32
  }

  ordenador1: ILaptop = {
    fabricante: 'MS2',
    modelo: 'eXEL',
    ram: 56
  }
  
}
