// Forma 1

function variable (){
    console.log("Console log");
};

// las funciones se pueden guardar dentro de variables  
const variable1 = variable;

// Forma 2
const saludo = function (){
    console.log("Hola mundo");
};

// Forma 3
const varibale2 = () => {
    console.log("Funcion tipo flecha");
};

// Forma 3.1
const variable3 = () => console.log("Console .log");