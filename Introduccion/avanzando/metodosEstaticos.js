class User {
    constructor(nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
    };

    // Con la palabra clave "static" estamos haciendo posible acceder al metodo o propiedad sin tener que definir una nueva variable
    static borrar(id_user){
        console.log(`El usuario con el id "${id_user}" ha sido eliminado de la base de datos`);
    };
};


User.borrar(1);