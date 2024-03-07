var fecha = new Date();
document.write(fecha.getHours(), " horas");
document.write("<br>");
document.write(fecha.getMinutes(), " minutos");
document.write("<br>");
document.write(fecha.getSeconds(), " segundos");
document.write("<br>");
var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
document.write("Día: ", diasSemana[fecha.getDay()]);
document.write("<br>");
document.write("fecha: ", fecha.getDate());
document.write("<br>");
document.write("Mes: ", fecha.getMonth());
document.write("<br>");
document.write("Año: ", fecha.getFullYear());
document.write("<br>");
document.write("<br>");
document.write("<br>");
function mostrarTiempo() {
    let fecha = new Date();
    let parrafo = document.getElementById("fecha");
    parrafo.innerHTML = fecha;
}
setInterval(mostrarTiempo, 1000);
// ---------------------------
// hoisting tiene que ver con que JS ordena primero la declaración de las variables, aunque estén abajo del código;