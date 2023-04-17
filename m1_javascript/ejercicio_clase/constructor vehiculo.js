// crear vehiculo que tenga un constructor con atributos para vehiculos
// cdrear metodos en la clase realacionadon con vehiculo: acelerar, frenar, encednder

class vehiculo {


    constructor(fabricante, modelo, color, caballos, ){
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.color = color;
        this.caballos = caballos;
        this.estaEncendido = false; // el coche inicialmente esta apagado
        this.velocidad = velocidad;
 }

        endender(){
            this.estaEncendido = true;
        }

        apagar(){
            this.estaEncendido = false;
         }

         // to do: introducir comprobacion de limites inferior y superior
         if (cantidad <= 0);
         return; // sale del metodo
         acelerar(cantidad)
            this.velocidad += cantidad;


         }

         frenar(cantidad){
            this.velocidad += cantidad;
         }


let vehiculo1 = new vehiculo('Toyota', 'Prius', 'rojo', 120);
vehiculo1.endender();
console.log(vehiculo1.estaEncendido);
vehiculo1.endender();
console.log(vehiculo1.estaEncendido);

vehiculo1.apagar();
console.log(vehiculo1estaEncendido);

console.log(vehiculo.velocidad); //0
vehiculo1.acelerar(50); // 50 km
console.log(vehiculo.velocidad); // 50 km

vehiculo1.frenar(20); //30 km/h

// casos limite
// que pasa si la canitad a acelerar hace que se supere el limite de 120 km
// que pasa si la cantidad a acelear es negativa
// que pasa si se quiere acelear pero el coche esta apagado


console.log('comprobar acelear con un numero negativo');
console.log(vehiculo1);
vehiculo1.acelerar(-40); // en vez de restar no hace nada, para que no quede negativo
console.log(vehiculo1.velocidad);



const auto = {
    velocidad : 0,
    acelerar(){
      this.velocidad = this.velocidad + 120;
    }
    frenar(){
      this.velocidad = this.velocidad - 120;
    }
  }
 

  console.log(auto.velocidad) 
  auto.acelerar()
  console.log(auto.velocidad) º
  auto.frenar()
  console.log(auto.velocidad)
      
