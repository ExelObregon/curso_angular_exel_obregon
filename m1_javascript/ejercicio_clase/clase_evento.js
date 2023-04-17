/* clase evento */

class Event {
    

    let user1 = new User('usuario1', 'user1@gmail.com');    
    let user2 = new User('usuario2', 'user1@gmail.com');
    let user3 = new User('usuario3', 'user1@gmail.com');
    let user4 = new User('usuario4', 'user1@gmail.com');
    let user5 = new User('usuario5', 'user1@gmail.com');

    constructor(title, date, adminUser)
        this.title = title;
        this.date = date;
        this.adminUser = adminUser; // objeto de la clase User
        // lista de usuarios invitado
        this.users = []

        /* metodo para añadir invitado */
        addUser(...user) {
            this.users.push(user);
        }

        let dat1 = new Date();
        let event1 = new Event('clas de JS', date1, user1);
        event1.addUser(users2);
        event1.addUser(users3);
        event1.addUser(users4);
        event1.addUser(users5);
        console.log(event1);