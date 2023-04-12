/*6. Crear una función que devuelve otra
función
1. Escribe  una  función  llamada  crearMultiplicador  que  acepte  un  argumento  factor.  La  función
debe  devolver  otra  función  que  acepte  un  número  y  devuelva  el  resultado  de  multiplicar  ese
número por el factor dado.
1// una funcion puede estar dentro de otra
*/

function crearMultiplicador(factor) {
    return function(number) {
        return number * factor
    }

}
let multiplicadorPor5 = crearMultiplicador (5)

console.log(multiplicadorPor5(1));
console.log(multiplicadorPor5(2));
console.log(multiplicadorPor5(3));
console.log(multiplicadorPor5(4));
console.log(multiplicadorPor5(5));