 let estacion = 'verano';
 if (estacion == 'invierno') {
    console.log(`si, me encanta el invierno`);
   
 }
 console.log(`despues del condicional...`);

let x = 5;
if (x < 2) {
    console.log(`la condicion es verdadera`);
} else {
    console.log(`la condicion es falsa`);
}

let estacion = 'invierno';
if (estacion == 'verano') {
    console.log(`comenzo el verano. ya podemos ir a la playa`);

} else {
    console.log(`ya quiero que venga el veranro`);
}

function clasificarValor(valor) {
    console.log(`divisible entre 2`);
} else if (valor % 3 == 0) {
    console.log(`divisible entre 3`);
} else {
    console.log(`no es divisible entre las opeciones`);
}

function interpretarIMC(indiceDeMasaCorporal) {
    if (indiceDeMasaCorporal < 18.5) {
        console.log(`bajo peso`);
    } else if (indiceDeMasaCorporal <= 24.9) {
        console.log(`normal`);
    } else if (indiceDeMasaCorporal <= 29.9) {
        console.log(`sobrepeso`);
    } else {
        console.log(`obeso`);
    }
}
interpretarIMC(32.2)


function puntajeDegolf(par, golpes) {
    if (golpes == 1){
        return 'hole-in-one';
    }else if (golpes <= par -2){
        return 'eagle';
    }else if (golpes == par - 1) {
        return 'birdie';
    }else if (golpes == par) {
        return 'par';
    }else if (golpes == par + 1) {
        return 'bogey';
    }else if (golpes == par + 2) {
        return 'doble bogey';
    }else if (golpes >= par +3) {
        return 'go home'
    }
}

console.log(puntajeDegolf(4,2));

console.log(`puntajeDegolf(4, 2) `);
// en esta ultima console.log, las comillas no
// van, sino sale error




function clasificarValor(valor) {
    let respuesta;
    switch (valor) {
        case 1:
        respuesta = 'alpha';
            break;
            case 2:
        respuesta = 'beta';
            break;
            case 3:
        respuesta = 'gamma';
            break;
            case 4:
        respuesta = 'delta';
            break;    
    }
    return respuesta;
}

console.log(clasificarValor(4));