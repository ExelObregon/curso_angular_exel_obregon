const persona = {
nombre: 'Exel',
presentarse: function(){
    return `Hola, mi nombre es ${this.nombre}.`;
}
}
console.log(persona.presentarse());
 

class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;

    }
}
let zeus = new TransbordadorEspacial('Jupiter');

let apolo = new TransbordadorEspacial('Marte');

console.log(zeus.planeta);
console.log(apolo.planeta);