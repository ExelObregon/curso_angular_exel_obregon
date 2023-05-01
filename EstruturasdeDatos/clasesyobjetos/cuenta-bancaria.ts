// constructor con atributos private
// id, titular, saldo
class CuentaBancaria {
    constructor
        (private id: number,
            private titular: string,
            private fechaNacimiento: Date,
            private saldo: number,
            private pinAcceso: string) { }

    incrementarSaldo(cantidad: number): void {
        // comprobar cantidad debe ser mayor o igual a 5 euro
        if(cantidad >= 5)
        this.saldo += cantidad;

    }

    retirarSaldo(cantidad: number): number {
        // comprobar que la cantidad no sea superior al saldo,
        if(cantidad > this.saldo){
            let saldoAux = this.saldo;
            this.saldo = 0;
            return saldoAux
        }

        this.saldo -= cantidad;
        
        // comprobar la edad
        // comprobar pin de acceso
        this.saldo -= cantidad;
        return cantidad;

    }

const cuenta1 = new CuentaBancaria(1,`titular`, new Date(`1990-01-01`), 1000, ' 4552');

let cantidadRetirada = cuenta1.retirarSaldo(1500); //1200
console.log(cantidadRetirada);


//fecha de nacimoento
//fecha actual, entre las dos sacas si es mayor de edad
private esMayorDeEdad(): boolean {
let birthYear = this.fechaNacimiento.getFullYear();
let fechaActual = new Date();
let currentYear = fechaActual.getFullYear();

return currentYear - birthYear >= 18;

}
// comprobar pin
private esPinValido(pin: string): boolean {
    return this.pinAcceso === pin;
    
}

// si no es el pin 
if (this.esPinValido(pin))
return 0;

}


//1. Retirar dinero con PIN incorrecto
console.log (cuenta1.retirarSaldo(3000, `1111`): ${cuenta1.retirarSaldo(3000, `1111`)});
console.log(cuenta1.retirarSaldo(500, `4552`));
//2. Retirar dinero siendo menor de edad
//3. Cantidad menor que cero
//4. Cantidad mayor que saldo

// alan@certidevs.com