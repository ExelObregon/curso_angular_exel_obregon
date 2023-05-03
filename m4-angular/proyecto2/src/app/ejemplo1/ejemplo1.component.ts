import { Component } from '@angular/core';


interface Iproduct {
  id: number;
  title: string;
  price: number;
}


@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component {

  // variables 
  mensaje:string = 'hola mundo desde ejemplo1'
  precio: number = 3.99;


// objeto
  product1: Iproduct = {
    id: 1,
    title: 'ordenador portatil',
    price: 1500.0
  }


}
