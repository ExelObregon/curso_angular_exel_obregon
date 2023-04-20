/*  CASO PRctico individual
1Crear clase Tarea: constructor con atributos
2. Crear clase TareaService o TareaDataBase que es una clase con metodos para simular una base de datos dentro
tiene un array de Tareas
3. Crear obejtos de ambas cases y probar el programa

*/




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

