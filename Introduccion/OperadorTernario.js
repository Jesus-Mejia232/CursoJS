// const tipoBoleto = "regular";
// let idAcceso;

// if (tipoBoleto === "vip"){
//     idAcceso = "VIP-1234-567";
// } else {
//     idAcceso = "REGULAR-678-234";
// }

// console.log(idAcceso);


// const tipoBoleto = "vip";
// let idAccesom;

// switch(tipoBoleto){
//     case "vip":
//         console.log("VIP-1234-12344")
//         break
//     case "regular":
//         console.log("REGULAR-123-212")
//         break
//     default:
//         console.log("El usuario no tiene un tipo de boleto valido")
// };


const tipoBoleto = "vip";
let idAcceso1 = (tipoBoleto === "vip") ? "VIP-2323-232": "REGULAR-123-123";

console.log("")

// Forma de remplazar el if para usar una sola línea de codigo
const idAcceso2 = (tipoBoleto === "vip") ? "El usuario cuenta con un boleto vip" : "El usuario cuenta con un boleto normal";


// Operador ternario en varias lineas de codigo (Ya con varias líneas de código. No obstante, cuando se van a utiliazar
//varias líneas de código, lo mejor es usar un condicional if):

