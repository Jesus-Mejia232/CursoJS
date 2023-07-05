class User {
    constructor(nombre,correo){
        this.nombre = nombre;
        this.correo = correo;
    }


    borrarUser(id_user){
        console.log(`El usuario con el id: ${id_user} ha sido eliminado`);
    }
}

const variable = new User("jesus","correo@correo.com");
variable.borrarUser(1);
