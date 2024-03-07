// EXISTEN 2 TIPOS DE EVENTOS DIFERENTES
// ---------------------------------------
// Modelo basico de eventos
//  caracteristicas limitadas
//  funciona en todos los ordenadores
// ---------------------------------------
// Modelo de eventos estandar
//  podemos hacer más cosas con el
//  todos los navegadores lo soportan
// ---------------------------------------

// function saludo(){
//     alert("Hola");
// }
// function saludo2(){
//     alert("Hola prro");
// }

// var botonSaluda=document.getElementById("evento");
// al momento de poner la funcion en addeventlistener no es necesario poner "()" de la funcion
// botonSaluda.addEventListener("click",saludo);
// botonSaluda.addEventListener("click",saludo2);

// botonSaluda.removeEventListener("click",saludo2);
// ---------------------------------------
// ---------------------------------------

var btnCaja = document.getElementById("btn-caja");
btnCaja.addEventListener("click", () => {
    var contenedor = document.getElementById("contenedor");
    var caja = document.createElement("div");
    caja.className = "caja";
    contenedor.appendChild(caja);
})
