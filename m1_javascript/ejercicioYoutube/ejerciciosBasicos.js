const PI=3.1416
console.log(PI);


//esto es un Objeto (llaves)
let objeto = {
    nombre:'John',
    edad:35,
}

//esto es un Array (arreiglo) (corchetes)
let colores= ['blanco', 'azul', 'rojo']

console.log(objeto);
console.log(colores);

//agregarle una propiedad al objeto
objeto.correo = 'edssel@gmail.com'
console.log(objeto);

//agregarle una propiedad a un Array (arreiglo)
colores.push('rosado');
console.log(colores);


//interpolacion de variables
//template string
let nombre = 'Edsel';
let apellido = 'Obregon';
let saludo = 'Hola, mi nombre es:'  + nombre + ' ' + apellido + '.'
//console.log(saludo);

//esta es la forma mas facil, pero con backtick (o acento invertido)

let saludo2 = `Hola mi nombre es: ${nombre} ${apellido}`;
console.log(saludo2);

let a = 2;
let b = new Number(100);
console.log(a,b)

console.log(typeof a, typeof b);

// esta es una fuction y a la funcion hay que invocarla

function estoEsUnaFucion(){
    console.log('Uno');
    console.log('Dos');
    console.log(`Tres`);
}

// asi se invoca, como los brujos, jejeje

estoEsUnaFucion();
estoEsUnaFucion();


