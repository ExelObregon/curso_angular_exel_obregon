/*5. Crear una función que utilice otra función
1. Escribe una función llamada operacion que acepte tres argumentos: a, b y una función
operador.  La  función  operacion  debe  ejecutar  la  función  operador  con  los  argumentos  a  y  b  y
devolver el resultado.
6. Crear una función que devuelve otra
función
1. Escribe  una  función  llamada  crearMultiplicador  que  acepte  un  argumento  factor.  La  función
debe  devolver  otra  función  que  acepte  un  número  y  devuelva  el  resultado  de  multiplicar  ese
número por el factor dado.
1
*/

function operacion(num1, num2, funcionOperador) {
    let result = funcionOperador(num1, num2);
   
    console.log(`resultado de operacion con ${num1} con ${num2} = ${result}`);
}