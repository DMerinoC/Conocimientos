// Hay RAMAS y NODOS.
// RAMAS: HEAD & BODY.
// NODOS: todas las etiquetas que están contenidas en esta.

// crear nodos
// ------------------------------------
// VAMOS A CREAR UN ELEMENTO, PODEMOS CREAR UN DIV, FOOTER, SECTION, ETC.
let caja = document.createElement("div");
// creamos un nodo de texto, es lo que estará contenidoen el div
let contenido = document.createTextNode("Hola Mundo");
// ingreso el texto en el div
caja.appendChild(contenido);
// le doy clase al div que creamos
caja.setAttribute("class", "caja");
// selecciono el contenedor padre de las cajas
var contenedor = document.getElementById("contenedor");
// ingreso el div en el contenedor padre
contenedor.appendChild(caja);


// MODIFICANDO ID O CLASES

// caja.id="hola";
// caja.className="claseNueva";
// ----------------------------
// CONOCIENDO AL ELEMENTO PADRE
let padre = caja.parentNode;

// ----------------------------
// MOVER DIV A OTRAS POSICIONES
// padre.insertBefore(caja, primeraCaja);

let cajas = document.getElementsByClassName("caja");
// padre.insertBefore(caja, cajas[2]);

// ----------------------------
// REEMPLAZAR NODO, elimina el actual para poner uno nuevo en esa posicion
padre.replaceChild(caja, cajas[1]);

// ----------------------------
// ELIMINANDO NODOS

padre.removeChild(cajas[0]);
padre.removeChild(cajas[1]);