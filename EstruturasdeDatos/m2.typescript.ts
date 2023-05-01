// cdrear clase employee con atributos: id, firstname, salray , compay

class employee{

    //atributos
    id: number;
    firsName: string;
    salary: number;
    company: string;

    // constructor
    constructor(id: number, firstName: string, salary: number, company:string){
        this.id = id;
        this.firstName = firstName;
        this.salary = salary;
        this.company = company;
    }

    //metodos
    saludar(): string{
        return 'hola mi nombre es ${this.firstName'} y gano tanto ${this.salary}

}

const employee = new employee(1, 'employee', 28000, 'Deloitte');
console.log(employee1.salary);
console.log(employee1.saludar());


