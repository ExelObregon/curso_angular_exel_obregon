class Company {
//constructor
constructor 
(public id: number,
public cif: string,
public legalName: string,
public outcome: number) {}

getFullName(): string {
    return `${this.cif} ${this.legalName}`;
}

getNetIncome(): number {
    return this.income - this.outcome;
}
}
const company1 = new Company(1,`B55674642`, `desarrollos csmicos sl`, 500000, 25000)
console.log(company1.getFullName());
console.log(company1.getNetIncome());
console.log(company1.outcome);