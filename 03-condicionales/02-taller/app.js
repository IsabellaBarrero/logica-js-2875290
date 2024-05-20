console.log('ejecutando')

//Punto1
/* let altura = prompt ('Ingrese su altura en cm:').toLowerCase ();
if (altura <= 150){
    console.log('persona de altura baja');
} else if (altura <= 170){
    console.log('persona de altura media')
} else {
    console.log('persona de altura alta')
} */

//Punto2
/* let matematica = prompt ('Ingrese la nota de matemáticas');
let espanol = prompt ('Ingrese la nota de español');
let sociales = prompt ('Ingrese la nota de sociales');

let promedio = (parseFloat(matematica) + parseFloat(espanol) + parseFloat(sociales)) / 3;

if (promedio === 10){
    console.log('Calificación final: Excelente');
} else if (promedio > 7 && promedio <= 10){
    console.log('Calificación final: Bueno')
} else {
    console.log('Calificación final: Insuficiente');
} */

//Punto3
/*let estatura = prompt("¿Cúal es tu estatura?").toLowerCase();
let velocidad = prompt("¿Cúal es tu velocidad?").toLowerCase();
let edad = prompt("¿Cúal es tu edad?").toLowerCase();
if (estatura >= 175  && velocidad >= 15 && edad >= 18){
    console.log("Puede ingrear al equipo profesional de mayores")
}else if (estatura >= 120  && velocidad >= 10 && edad >= 7){
    console.log("Puede ingresar al equipo profesional de menores")
}else{
    console.log("No puede ingresar al equipo")
}*/

// Punto 4
/*let total = prompt ("Ingrese el total de escritorios comprados");
let totalescritorios = (parseFloat(total)) *200;
let precioescritorio = 200;
let diez = (parseFloat(totalescritorios)) *0.1;
let veinte = (parseFloat(totalescritorios)) *0.2;
let cuarenta = (parseFloat(totalescritorios)) *0.4;
let menos5 = (parseFloat(totalescritorios)) - (parseFloat(diez));
let menos10 = (parseFloat(totalescritorios)) - (parseFloat(veinte));
let mas10 = (parseFloat(totalescritorios)) - (parseFloat(cuarenta));
if (total >= 5 & total <10){
    console.log("el precio normal seria " + totalescritorios + " pero con los descuentos su precio es " + menos10)
}else if (total > 10){
    console.log("el precio normal seria " + totalescritorios + " pero con los descuentos su precio es " + mas10)
}else {
    console.log("el precio normal seria " + totalescritorios + " pero con los descuentos su precio es " + menos5)
}*/

// Punto 5
/*alert("Listado de frutas disponibles:\n- Uva\n- Mora\n- Fresa\n- Mango\n- Piña");
let frutaelegida = prompt("Ingrese el nombre de la fruta que desea comprar").toLowerCase();
let cantidad = prompt("Ingrese la cantidad que desea comprar");
let valores = {
    "uva": 1400,
    "mora": 1000,
    "fresa": 1200,
    "mango": 500,
    "piña": 2000,
};
let valorporunidad = valores[frutaelegida];
let total = valorporunidad * cantidad;
alert("Fruta: " + frutaelegida + "\nValor por unidad: $" + parseFloat(valorporunidad) + "\nValor total: $" + parseFloat(total));
*/