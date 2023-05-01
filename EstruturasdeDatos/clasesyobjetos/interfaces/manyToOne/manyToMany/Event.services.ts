// Opcional: convertir EventService en una interfaz
// y hacer dos clases que la implementen
// una clase hace las operaciones con un Array

import { IEvent } from "./event.model";

// otra clase hace las operaciones con un Set
export class EventService {
    events: Array<IEvent> = [];

    // devuelve todos los eventos
    public findAll(): Array<IEvent> {
        return new Array(...this.events); // devolver una copia del array events
    }
    // devuelve un evento filtrando por su id
    public findById(id: number): IEvent | undefined {
        return this.events.find(evento => evento.id === id); // find devuelve un objeto
    }
    public findAllByPriority(prioridad: string): Array<IEvent> {
        return this.events.filter(evento => evento.priority === prioridad); // filter devuelve un Array
    }
    public save(event: IEvent): IEvent {
        if (event.id)
            throw new Error("Para crear un nuevo evento no se añade id");

        // comprobar si existe otro evento con el mismo título, en ese caso lanzar un error
        if (!this.isValid(event))
            throw new Error("Datos incorrectos");

        event.id = this.generateNextId();

        this.events.push(event);
        return event;
    }

    private isValid(event: IEvent) {
        // validación 1: title tenga longitud entre 10 y 50

        // validación 2: title no esté ocupado ya

        // validación 3: title no contenga una palabra prohibida
    }

    private generateNextId(): number {
        let maxId = 0;
        for (const event of this.events) {
            if (event.id > maxId)
                maxId = event.id;
        }
        return ++maxId;
    }

    this.events[position].title = ; event.title;
}    