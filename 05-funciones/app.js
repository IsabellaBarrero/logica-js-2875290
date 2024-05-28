//Funciones
//Función que salude al usuario

let nombreUsuario = prompt('Dime tu nombre')

//Declaración de una función
function saludar ( nombre = 'desconocido' ){
    console.log('Función ejecutada...')
    return `Bienvenido ${nombre}`
}

//Llamado de una función
console.log( saludar (nombreUsuario) ) 

// función que multiplique dos números, la función debe retornar solamente le resultado de la operación. Llamar a la función 'multiplicar'
let numero1 = prompt('ingrese el primer número a multiplicar');
let numero2 = prompt('ingrese el segundo número a multiplicar');
 function multiplicar (n1, n2){
    return n1 * n2
 }
 console.log(`El resultado es: ${ multiplicar(n1,n2) }`)

 //Crear una función que le diga cuánto debe ahorrar al mes según sus ingresos. Que la función se llame "calcularAhorro"