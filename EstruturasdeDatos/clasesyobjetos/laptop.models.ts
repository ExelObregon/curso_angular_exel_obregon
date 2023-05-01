export class Laptop {
    constructor
    // propiedades del objeto (caracteristicas del objeto)
        (private id: number, 
        private ram: number,
        private cores: number,
        private manufacturer: string,
        private model: string) {}

    //comportamiento
        getFullName() {
            return `${this.manufacturer} ${this.model}`
        }
}