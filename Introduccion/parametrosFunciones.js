// El parametro que se pone dentro de los parentesis es basicamente una variable que tendra el valor que ingresemos al
// Momento de invocar la variable

/*El parmetro es el que se indica dentro de los parentesis, al crear la funcion
El argumento es el que se da cuando ingresamos datos al invocar la funcion*/
const variable = (nombre) => {
    console.log(`Hola ${nombre}`);
};

variable("Jesús");

// Calculadora que va a sumar numeros:

const sumando = () => {
    console.log(`El resultado de la suma es ${num1 + num2}`);
};

sumando(2,3);