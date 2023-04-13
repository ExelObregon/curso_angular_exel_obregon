

//obtener un array precion con iva utulizando la funcion map

let preciosSinIva = [4.9, 10.24, 40.99, 100.0];
console.log(preciosSinIva);

let sumar21 = preciosConIVA => preciosConIVA + preciosConIVA*0.21;

let preciofinal = preciosSinIva.map(sumar21);

console.log(preciofinal);




// otra forma del ejercicio con iva

let preciosConIVA = preciosSinIVA.map(precio => precio + precio * 0.21);

console.log(preciosSinIVA);
console.log(precioscConIVA);


