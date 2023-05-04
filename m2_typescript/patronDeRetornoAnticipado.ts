
//esto es importante por si queremos
//detener alguna fumcion

function calcularRaizCuadrada(num: number) {
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(25));