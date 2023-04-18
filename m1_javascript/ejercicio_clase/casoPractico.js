//Paso 1: crear una clase activity

class activiy{

    constructor(id, title, content, status, importancia, date){
        this.id = id;
        this.title = title;
        this.content = content;
        this.estatus = status;
        this.importancia = importancia;
        this.date = date;

    }
}
// paso 2: crear una clase con metodo para trabajar con objetos Activity
/* añadir una nuva tarea
devolver todas las tareas
devolver todas las tareas filtrando por estado

*/


class activiyDatabase{
    constructor(){
        this.activities = [];
    }

    addActivity(activity){
        // generar el nuevo id que tendra Activity
        let id = 0;
        if (this.activities.lenght ===0)
        id = 1;
        

        // Math.max (esto es un bucle)

        let maxId = 0;
        for (const activiyDatabase of this.activities) {
           if(currentActivity.id > maxId)
           maxId = activiyDatabase.id
        }
        console.log(`valor id maximo ${maxId}`);

               
        activity.id = ++maxId;
            this.activities.push(activity);


    }


}

// paso 3. crear objetos y probar los metodos CRUD para simular una base de datos

let activiyDatabase = new activiyDatabase();
let reunionTrabajo = new Activiy(undefined, 'Reunion JS', 'tratar caso practico', 'en progreso', 'media', )
new Date('2023-04-18');



let running = new ActivityService(
 undefined,
 'entrenamiento cardiovascular',
 'correr 5 km',
 'terminado',
 'normal',
 new Date('2023-04-18')

);

activiyDatabase.addActivity(reunionTrabajo);