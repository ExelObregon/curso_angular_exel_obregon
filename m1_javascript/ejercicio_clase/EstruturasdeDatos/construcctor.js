class SmartPhone {
    constructor(model, cores, ram, isAndroid){
        this.model = model;
        this.cores = cores;
        this.ram = ram;
        this.isAndroid = isAndroid;

    }

descripcion(){
    

console.log(`el modelo es ${this.model}  ${this.cores}`);

}

}
// ctrl + shift + space, permite ver los argunmentos dentro de los parentesis


const phone1 = new SmartPhone('One Plus 11', 4, 12, true);
const phone2 = new SmartPhone('Xiaomi 13', 4, 12, true);
const phone3 = new SmartPhone('Apple 13', 4, 12, true);

console.log(phone1.descripcion());

