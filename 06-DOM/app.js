
/* const pantalla = document.getElementById('titulo');
const miBtn = document.getElementById('btn');


//CREAR EL EVENTO
miBtn.addEventListener('click', function(){
    pantalla.style.color = 'blueviolet'; //CAMBIA EL COLOR
    miBtn.style.color = 'green';
    pantalla.style.textAlign = "center"
    pantalla.innerText = 'Ejecutando script😜'; //CAMBIA EL TEXTO DENTRO DE LA ETIQUETA
}) */

//EJERCICIO: Crear un contador que incremente hasta 20, no puede mostrar números por debajo de cero 0
//1.Captura de variables
const numero = document.getElementById("numero");
const decremento = document.getElementById("btn1");
const incremento = document.getElementById("btn2");

let i = 0;

//2.Creación de funciones
function decrementar (){
    if (i > 0) {
        i--;
        numero.innerText = i;
    }
}

function incrementar (){
    if (i < 20) {
        i++;
        numero.innerText = i;
    }
}

//3.Llamado y eventos
decremento.addEventListener ('click', decrementar);
incremento.addEventListener ('click', incrementar);