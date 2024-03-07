function saludo(){
    alert("hola");
}
// produce una sola vez un evento después de un cierto tiempo
let alerta=setTimeout(saludo,3000);
// esta función limpia el evento de tiempo
clearTimeout(alerta);
// este evento ejecuta cada cierto tiempo
setInterval(saludo,3000);