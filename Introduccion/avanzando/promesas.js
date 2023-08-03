<<<<<<< HEAD
//? Que son las promesas: Las promesas son estructuras que vamos a poder definir para decirle al navegador que 
//? espere a que nosotros terminemos de hacer una operacion, y que cuando nosotros terminemos con la operacion
//? Le vamos a avisar y le vamos a responder con los datos.


const promesa = new Promise((resolve, reject) => {
    // Accion que ejecutará
    setTimeout(() => {
        const exito = false;

        if (exito) {
            resolve("La operación tuvo éxito");
        }
        else {
            reject("La operación no tuvo exito");
        }
    }, 4000)
})

promesa.then((mensaje) => {
    alert(mensaje)
});

promesa.catch((mensaje) => {
    alert(mensaje)
});

=======
//? Que son las promesas en js?
//* Son estructuras que nosotros vamos a poder definir, para decirle al navegador que queremos que espere a que nosotros terminemos de hacer una operacion, y que cuando nosotros
//* teminemmos esa operacion le vamos a avisar y le vamos a responder con los datos

const promesa = new Promise(() => {
    
});
//? 
>>>>>>> b060f7eb8970dc08f2578cd4f3a70ffe83d7a777
