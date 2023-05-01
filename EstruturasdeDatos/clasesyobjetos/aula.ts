class Aula {
    constructor
    (private id: number,
        private capacidad: number,
        private ventilacion: boolean) {}

        setCapacidad(capacidad) {
            this.capacidad = capacidad > 0 && capacidad <= 40 ? : this.capacidad
        }
}

const aulaCursoAngular = new Aula(1,25,true);
const aulaReuniones = new Aula(1,3,false);
const aulaAnalisisDatos = new Aula(3,30,true);

console.log(aulaCursoAngular);