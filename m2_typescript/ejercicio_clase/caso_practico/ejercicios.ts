 // validación 1: title tenga longitud entre 10 y 50
    // validación 2: title no esté ocupado ya
        // validación 3: title no contenga una palabra prohibida
   

        private isValid(event: IEvent): boolean {
            // validación 1: title tenga longitud entre 10 y 50
            // if (event.title.length >= 10 && event.title.length <= 50)
            //     return true;
            if (event.title.length < 10 || event.title.length > 50)
                return false;
    
            // validación 2: title no esté ocupado ya
            for (const currentEvent of this.events)
                if(currentEvent.title === event.title) // si es true significa que el titulo ya existe
                    return false;
            
    
            // validación 3: title no contenga una palabra prohibida
            let blackwords: string[] = ['prohibido1', 'prohibido2', 'prohibido3'];
            for (const word of blackwords)
                if (event.title.includes(word))
                    return false;
            
            return true; // todo OK
        }
    
        private generateNextId(): number {
            let maxId = 0;
            for (const event of this.events) {
                if (event.id > maxId)
                    maxId = event.id;
            }
            return ++maxId;
        }
    }