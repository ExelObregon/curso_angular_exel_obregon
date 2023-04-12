/*1. Crear una función simple
1. Escribe  una  función  llamada  saludar  que  acepte  un  argumento  nombre  y  muestre  en  consola
un saludo personalizado, por ejemplo, "¡Hola, Juan!".

*/

function saludar(nombre) {
    console.log('Hola ${nombre}');
    
}

saludar('Patricia');
saludar('Exel');

let username = 'exelobregon';

function isValidUsername(username){
    return (username.lenght > 0 && username.lenght < 50)
}

let isValidUsername = isValidUsername('ejemplousuario');
if (isValidUsername('otrousuario')){
    console.log('es usuario valido');
}