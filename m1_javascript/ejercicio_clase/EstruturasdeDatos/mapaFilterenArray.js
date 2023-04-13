/*
3. Uso de map, filter y reduce en Arrays
1. Crea  un  array  llamado  calificaciones  que  contenga  calificaciones  numéricas  (por  ejemplo,  85,
90, 78, 92, 88).
2. Utiliza el método map para aumentar cada calificación en 5 puntos.
3. Utiliza el método filter para quedarte solo con las calificaciones mayores o iguales a 90.
4. Utiliza el método reduce para calcular la calificación promedio
*/


// opcion 1: sumar todo con un for y dividir la suma para calcular la media. con bucle for es mas facil

let calificaciones = [85, 90, 70, 60, 85, 95];


let sumatorio = 0;
for (const calificacion of calificaciones) {
    sumatorio = sumatorio + calificacion

    console.log(`Suma total de las calificaciones: ${sumatorio}`);

    let calificacionMedia = sumatorio / calificaciones.length;

    
    console.log(`promedio de calificaciones: ${calificacionMedia}`);

    
    
}

// opcion 2: sumar todo con reduce y luego dividir para cualcular la media (es mas facil el for, el de arria)

let calcularSumatorio = (sumatorio, calificacion) => sumatorio + calificacion;
let sumatorio2 = calificaciones.reduce(calcularSumatorio, 0);
console.log(`suma total de las calificaciones: ${sumatorio}`);