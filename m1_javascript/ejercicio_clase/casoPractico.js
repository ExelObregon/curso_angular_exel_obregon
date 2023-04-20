//Paso 1: crear una clase activity

// Paso 1: Crear una clase Activity

class Activity {

    constructor(id, title, content, status, importance, date) { 
        this.id = id;
        this.title = title;
        this.content = content;
        this.status = status;
        this.importance = importance;
        this.date = date;
    }
}

// Paso 2: Crear una clase con métodos para trabajar con objetos Activity
/*
Crear una clase que represente un servicio de tareas que tenga como atributo una estructura de
datos de tareas y métodos para gestionar las tareas:
• Añadir una nueva tarea
• Devolver todas las tareas
• Devolver todas las tareas filtrando por estado
• Devolver todas las tareas filtrando por prioridad
• Actualizar una tarea
• Eliminar una tarea
*/
class ActivityDatabase {

    constructor() {
        this.activities = [];
    }

    addActivity(activity) {

        /*
        Para simular una base de datos, generamos un id (1, 2, 3, ...) único para cada Activity
        con un bucle for o con la clase Math calcular el id más alto de todos los ids 
        */
        let maxId = 0;
        for (const currentActivity of this.activities) {
            if (currentActivity.id > maxId)
                maxId = currentActivity.id;
        }
        console.log(`Valor id máximo: ${maxId}`);

        maxId++;
        activity.id = maxId;
        this.activities.push(activity);
        return activity;
    }
}

// Paso 3: crear objetos y probar los métodos CRUD para simular una base de datos
let activityDatabase = new ActivityDatabase();
let reunionTrabajo = new Activity(
    undefined, 
    "Reunión JavaScript", 
    "tratar caso práctico", 
    "En progreso",
    "Media",
    new Date("2023-04-18")
    );
let running = new Activity(
    undefined,
    "Entrenamiento cardiovascular",
    "Correr 5 KM", 
    "Terminado",
    "Normal",
    new Date("2023-04-15")
);
activityDatabase.addActivity(reunionTrabajo); // id 1
activityDatabase.addActivity(running); // id 2


update(activity){
    this.filterActivity.filter(currentActivity => currentActivity.id === activity.id);
    

    let filterActivity = this.activities.filter(currentActivity 0=> currentActivity.id === activity.id)
    if(1filterActivity)
    retunr activity
}
