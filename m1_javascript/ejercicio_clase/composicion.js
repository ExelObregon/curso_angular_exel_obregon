/* clase usuario */
class User {
constructor(firstName, email) {
this.firstName = firstName;
this.email = email;
}
}

let user1 = new User('usuario1', 'usuario1@gmail.com')
let user2 = new User('usuario2', 'usuario2@gmail.com')
let user3 = new User('usuario3', 'usuario3@gmail.com')
// de aqui para arriba: es la clase y el objto



/* clase EVENTO, que tenga titulo, fecha, usuario admin*/

class Event {
    

constructor(title, date, adminUser) {
    this.title = title;
    this.date = date;
    this.adminUser = adminUser; // objeto de la clase User
}
}

let event = new Event('Reunion de desarrollo', new Date('2023-04-18'), user1);
console.log(event1.title);
console.log(event1.date);
console.log(event1.adminUser.email);
console.log(event1.adminUser,firstName); //objeto de la clase User

//cambiar el usuario admin del evento1



/* clase Evento que tenga titulo, fecha, usuario admin, lista de invitatod*/