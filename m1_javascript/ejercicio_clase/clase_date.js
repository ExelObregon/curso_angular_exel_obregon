
let fechaActual = new Date();
console.log(fechaActual);


//yy-mm-dd
let fechaNacimiento = new Date('1990-12-14');
console.log(fechaNacimiento);

// extreaer el año de la fecha
console.log(fechaNacimiento.getFullYear());

// extreaer el mes, comienza de 0 a 11
console.log(fechaNacimiento.getMonth());


// los meses comienzas de 0 a 11
let navidad = new Date(1990, 11, 25, 00);
console.log(navidad);

//caso febrero
let ejemploFebrero = new Date(1990, 1, 30, 23);
console.log(ejemploFebrero); // se va a marzo porque febreor tenien 28 dias

ejemploFebrero.