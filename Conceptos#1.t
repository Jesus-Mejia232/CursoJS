Tipos de variable y datos en js:

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
# De esta formas estamos declarando la variable:
# Declaarar una variable es decirle al programa que la variable existe, pero no tiene valor aún
"VAR" : Con var estamos declarando la variable, pero lo mas optimo es usar "let"
"LET" : Nos limita el alcance de la variable a el bloque en el que la utilizamos 
"CONST" : Hace que la variable tenga un valor fijo, es decir, no puede cambiar su valor a lo largo del programa, la diferencia
entre las otras dos variables, es que no se puede declarar y luego incializar, se tiene que inicializar cuando se declara
"UNDEFINED": Nos dice que la variable no está definida
"NUll": Es distinto a "UNDEFINED" ya que le estamos diciendo que la variable está vacia, pero eso es intencional, ya que 
le estamos diciendo, que, si va a tener un valor, y ese valor es que no va a tener un valor
"NaN": Significa "NOT A NUMBER" No es un numero, esto nos lo arroja cuando estamos tratando de hacer una operacion 
matematica cuando hay otros tipos de datos que no son numeros


"PROMT": Sirve para pedir datos al usuario y guardar esos datos en una variable si asi se quiere
EJEMP: let variable = promt("Dime tu nombre:") alert(nombreDeLaVariable)

Scope : El scope en programacion es basicamente el ambito en el que se crea una variable, todo lo que este dentro del mismo campo
podrá usar la variable. Pero si un bloque dentro del bloque original, usa una variable esta solamente existirá dentro del subbloque  
mas no en el bloque principal(original). Es basicamente el alcance de la variable  

# Ya si queremos darle un valor a nuestra variable, tenemos que "Inicializarla"


# Operadores aritmeticos:

Hay operadores aritmeticos que funcionan solamente con un numero, por ejemplo el de resta

numero1 = 10;
numero2 = 5;

numero1--;

result = numero1;
alert(result);
# Si no ponemos la operacion antes de mostrarla, no se ejecutará la opereacion y solamente se verá el dato original, sin 
# Cambios
# Lo que pasa es que la operacion se realiza después, si hacemos la operacion en la misma linea que imprimimos la variable
# Se motrará la variable antes de haber sido moficada por la operación

# Formas de concatenar en js:

# Forma 1 El problema con esta forma de concatenar es que si las variables son numericas sus valores se sumarian.
# Para evitar eso podríamos forzar un string 
saludo1 = "Hola Jesus";
pregunta = "Cómo estás?";

frase = saludo1 + pregunta;

document.write(frase);

# Forma 2 (modificando la forma 1)

numero1 = 5;
numero2 = 4;

frase = "" + numero1 + numero2 # De esta manera podemos concatenar numeros sin que se sumen en el intento. Lo que hacemos
# Es con la cadena convertir los otros dos datos a tipo string, pero solamente durante la concatenación


# Contatenando con "Concat()"
La unica diferencia con las otras formas de concatenar es que el concat es para concatenar strings, no para concatenar numeros
la forma de concatenar numero con el concat seria que una de las dos variables sea un string
Ya la estrutura de la concatenacion seria;

numero1 = 3;
numero2 = 5;

concatenacion = numero1.concat(numero2);

# Concatenando con backticks o comillas inveridas

nombre = "Jesus Mejía";
saludo = " y estoy caminando";

frase = `Soy ${nombre} ${saludo}`; # La desventaja de usar esta manerda de concatenar es que no se puede usar
# variables de tipos Numericas


# Operadores de comparación;

"=="     -- Compara si las dos variables son iguales, aunque sean de distinto tipo de dato
"="      -- Asigna valor a la variable
"==="    -- Compara si las dos variables son estrictamente iguales, incluyendo si son del mismo tipo de dato
"!=="    -- Compara si las dos variables son efectivamente con distintos tipo de dato
"!="     -- Compara si las variables son distintas
"a > b"  -- Compara si "a" es mayor que "n"
"a < b"  -- Compara si "b" es menor que "b"
"a >= b" -- Compara si "a" es menor o igual a "b"
"a >= b" -- Compara si "a" es mayor o igual a "b"


# Operadores logicos js;

AND = && :  -- Arroja verdadero solo si las dos condiciones se cumplen
OR = ||  :  -- Arroja verdadero con que una de las dos condicones se cumpla
NOT = !  :  -- Vuelve que la afirmación sea lo contrario de lo que es. Ejemo; Si la afirmacion es falsa la vuelve verdadera y viceversa

