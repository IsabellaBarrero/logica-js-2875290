/* let edadUsiario = prompt ('cuál es tu edad');

if (edadUsiario >= 18) {
    console.log ('eres mayor de edad')
} 
else {
    console.log ('eres menor de edad')
}

//Depende del color del semáforo le damos un mensaje al usuario, si pone un color diferente a rojo, amarillo o verde dirá "no sé qué hacer"
//.toLowerCase() //transforma el texto en minúscula
let color = prompt ('¿color semáforo?').toLowerCase ();
if (color === 'rojo') {
    console.log ('Detente')
}else if (color === 'amarillo'){
    console.log ('Prepárese')
}else if (color === 'verde'){
    console.log ('Arranque')
}else{
    console.log ('No sé qué hacer')
} */

let edad = prompt ('edad').toLowerCase();
let nombre = prompt ('nombre').toLowerCase();

if(nombre === 'Mario' || nombre === 'Carlos' && edad >= 18){
    console.log('entra VIP')
}else if(edad <'18'){
    console.log('no puede ingresar')
}else{
    console.log('no sé qué hacer')
}+