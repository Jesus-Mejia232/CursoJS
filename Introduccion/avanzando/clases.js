//? Clases. Estructura de una clase:
//* Definicion: 
//* Propiedades: Las clases pueden contener propiedades. Dentro de una clase se llaman propiedades.
//* Constructor: Es un metodo especial para inicializar un objeto creado en una clase.
//* Métodos: La clase puede contener funciones. Dentro de una clase se llaman métodos.
//* Debo tronar las ampolas eb la piel

class User {
    tipo = "Usuario";

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    };
    
    obtenerNombre (){
        console.log("Obteniendo datos...");
        return `${this.nombre} ${this.apellido}`;
    };
};

const user = new User("Jesus","Mejia");
console.log(user.obtenerNombre());
//* Amnistia
//* Creando la funcion
//* Siempre

//? 