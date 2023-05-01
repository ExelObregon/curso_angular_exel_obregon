/* palabras reservadas para interfaces
interface
implements
*/

interface ISaludo {
    // declarar metodos
    saludar(): string;
    despedirse(firstName): string;

}

class SaludoFormal implements ISaludo{
    saludar(): string {
        return 'Estimados, buenos dias';
    }
    despedirse(firstName: string): string {
        return `Hasta la proxima ${firstName}`;
    }

}

class SaludoInformal implements ISaludo {
    saludar(): string {
        return 'que pasa gente';

    }
    despedirse(firstName: any): string {
        return `chao ${firstName}`;
    }
    
}


let saludo1: Isaludo = new SaludoFormal();
let saludo2: Isaludo = new SaludoInformal();

console.log(saludo1.saludar());
console.log(saludo2.saludar());
