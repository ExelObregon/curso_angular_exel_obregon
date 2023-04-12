/*6. Operadores lógicos
1. Crea tres variables booleanas condicion1, condicion2 y condicion3 con diferentes valores.
2. Utiliza operadores lógicos (&&, ||, !) para combinar las condiciones y muestra los resultados en
consola.
*/

let edad = 17;
let esMayorDeEdad = edad > 18;

let completeName =  'jua garcia';
let esJuan = completeName.includes('juan');

let apto = esMayorDeEdad && esJuan

function esInvitado(name){
    return name.includes('invitado1') ||  name.includes('invitado2');

    
}
