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

