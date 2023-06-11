//? .shift() es otro metodo, que sirve para eliminar el primer elemento del arreglo, y hacer que los indices de todos los elementos 
//? se recorran entre si para el nuevo orden. Ejemp: 

//*  Como dato extra, en el momento que se elimina el primer elemento, ese proceso se puede hacer dentro de una variable nueva,
//*  y cuando se acceda a esa variable nueva, estará el elemento eliminado

        const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes"];
//      console.log(dias);
//      const diaEliminado = dias.shift(); //* En esta variable se encuentra el elemento eliminado
//      console.log(dias);
//      console.log(diaEliminado); 

//! ----------------------------------------------------------------------------------------------------------------------------


//? Si queremos agregar un elemento al arreglo, usamos .unshif(), unshif agrega un elemento al inico y va empujando a los demás.

        const diadeMas = dias.unshift("Jesus");
//      console.log(dias);
//      console.log(diadeMas);

//! ----------------------------------------------------------------------------------------------------------------------------


 //? Ahora veremos otro metodo, llamado .splice() y se usa asi:
//* Primer parametro: Posicion donde queremos comenzar a insertar los elementos
//* Segundo parametro : Si queremos eliminar elementos del arreglo desde la posicion indicada, y la cantidad de elementos a eliminar
//* Resto de parametros: Elementos a insertar

        const amigos = ["Jesus","Edgardo","Mejia","Acosta"];
        const amigosNuevos = amigos.splice(2,3,"Mejor","Ninguno"); //* Si accedo a esta variable vere los elementos antiguos
//*     Si no queremos eliminar elementos y solo queremos agregar más, entonces en el segundo parametro, ponemos un cero, para que no se elimine
//*     ningun elemento y solamente se agreguen los que indiquemos en el tercer parametro. Ejemp:
        const ejemplo = amigos.splice(3,2,"Ejemplo1","Ejemplo2");
//      console.log(amigosNuevos);
//      console.log(ejemplo);

//! ----------------------------------------------------------------------------------------------------------------------------


//? .slice() nos permite copiar una parte de un arreglo, a otro.
//*     1mer parametro - Posicion desde donde queremo copiar
//*     2do parametro - Hasta antes de que elemento copiar*/
//*     Basicamente hay que poner en los parametros un indice mayor al que queremos copiar, y exactamente desde el indice que queremos empezar, a copiar(Con slice)
        const frutas = ["Fresa","Manzana","Uva","Piña","Mango","Naranja","Melon"];
        const favoritas = frutas.slice(1,6);
        //console.log(frutas);
        //console.log(`Las frutas favoritas de todas son: ${favoritas}`);

//! ----------------------------------------------------------------------------------------------------------------------------


//? Método .indexof() Con este metodo obtenemos el index de un eleemnto, si no hay elementos nos devuelve -1
        const nombres = ["Jesus","Edgardo","Mejia","Acosta","Goku","Le","Gana","A","Todo"];
        console.log(`El usuario con nombre "Jesus" se encuentra en el indice numero: ${nombres.indexOf("Vegeta")}`);
        //* Un dato importante es que esto nos arrojará el primer index del elemento, es decir, si el elemento está repetido, nos dará como resultado 
        //* El indice en donde esté escrito primero.

        