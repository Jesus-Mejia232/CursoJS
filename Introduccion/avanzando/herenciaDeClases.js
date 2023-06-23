class User {
    tipo = "usuario";

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    obtenerPost(){
        const posts = ["post1","post2"];
        return posts;
    }
}

class Mod extends User {
    constructo(nombre, password, permisos){
        super(nombre,password) // Con super podemos copiar todas las propiedades y metodos de la clase anterior. Aqui basicamente lo que estamos haciendo es, remplazar el valor 
        // de las dos variables, para esta clase, con los valores que esta clase reciba
        this.permisos = permisos;
    }

    borrarPos(id){
        if(this.permisos.include("borrar")){
            console.log(`El post con el id ${id} ha sido eliminado`)
        }
    } 
}



user1 = new Mod("Jesus","Mejia","borrar","editar");
user1.borrarPos(8);