/*
4. Crear y manipular un Objeto
1. Crea un objeto llamado persona con las propiedades nombre, apellido, edad y ciudad.
2. Cambia el valor de la propiedad ciudad a una nueva ciudad.
3. Agrega una propiedad ocupacion al objeto.
4. Muestra en consola todas las propiedades y sus valores usando un bucle for...i*/

class persona {
    nombre = 'persona';
    apellido = 'apellido';
    edad = 18;
    ciudad = 'madrid';
}
    const persona1 = new persona();
    console.log(persona1);

    //cambiar ciudad
    persona1.ciudad = 'barcelona';
    console.log(persona1);
    
    // añadir nuevos atributos
    persona1.puesto = 'developer;'
    console.log(persona1);

 // añadir un telefono con/de array
    persona1.telefonos = [123456789, 12345689];
    console.log(persona1);








