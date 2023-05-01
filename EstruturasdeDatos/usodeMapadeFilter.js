/*
3. Uso de map, filter y reduce en Arrays
1. Crea  un  array  llamado  calificaciones  que  contenga  calificaciones  numéricas  (por  ejemplo,  85,
90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio
*/

 // for (let value of array(este caso es numeros))

 

 // opcion 1: cono for of
let calificaciones = [85, 90, 70, 60, 85, 95];
console.log(calificaciones);

let calificacionesAltas = []
for (const calificacion of calificaciones) {
    
    if(calificacion >= 90)
    console.log(calificacion);
    calificacionesAltas.push(calificacion);

}

console.log(calificaciones);
console.log(calificacionesAltas);


// opcion 2: con filter y funcion fleche (la mejor forma de hacerlo)

let calificacionesAltas2 = calificaciones.filter(calificacion => calificacion >=90);










//let sumar5 = calificacion => calificacion + 5;
///console.log(calificaciones.map(sumar5));
//calificaciones.map(sumar5);
//console.log(calificaciones); // se mantiene intacto
