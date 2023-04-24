return this.activities.filter(activity => activity.title.includes(title));


// modifica un objeto activity que ya existe en el array de activities
update(activity) {

    let activityIndex = this.activities.findIndex(
        currentActivity => currentActivity.id === activity.id
    );

    this.activities[activityIndex].title = activity.title;
    this.activities[activityIndex].status = activity.status;
}

deleteById(id) 

    let activityIndex = this.activities.findIndex(activity => activity.id === id);
@@ -130,4 +141,16 @@ let activity2 = activityDatabase.filterById(2);
let activitiesByStatus = activityDatabase.filterByStatus("Pendiente");
let activitiesByTitle = activityDatabase.filterByTitle("Entrenamiento");

activityDatabase.deleteById(2);
activityDatabase.deleteById(2);




// ======================================= ACTUALIZAR ==============================

console.log(activityDatabase.filterById(1));

let activity1Edited = new Activity(1, "modificado", undefined, "rechazado", undefined, undefined)
activityDatabase.update(activity1Edited);

console.log(activityDatabase.filterById(1));