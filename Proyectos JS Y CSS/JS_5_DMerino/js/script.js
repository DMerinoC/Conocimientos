// ------------------------------------------------------------
// ------------------------------------------------------------
// PARA VER EL NUMERO DE JUGADAS UTILIZAR LA CONSOLA DEL MAVEGADOR
// ------------------------------------------------------------
// ------------------------------------------------------------
let jugadaPersona = [];
let jugadaMaquina = [];
// El arreglo jugadasGanadorastiene el numero de victorias para ganar, ya sea en cualquier orden de click al botón, ejemplo
// no importa si mi arreglo jugadaPersona tiene los elementos [3,1,2] con el every y el include, igual lo capturará el [1,2,3]
let jugadasGanadoras = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [4, 5, 6], [7, 8, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7]];
// esta destructuración de arreglo no sirve, ya que tenía pensado hacer otro tipo de solución igual lo dejo
let [opcion1, opcion2, opcion3, opcion4, opcion5, opcion6, opcion7] = jugadasGanadoras;
// se agregó una variable movimientos para contar los 9 movimientos
let movimientos = 0;
// variable para detener el juego
let victoria = false;
function jugada(posicion) {
    // con este if detenemos el juego capturando la derrota o victoria. Dando un mensaje de el juego terminó
    if (!victoria) {
        if (!validarJugada(posicion)) return;
        jugadaPersona.push(posicion);
        // aumenta los movimientos
        movimientos++;
        // cuenta los movimientos en la consola
        console.log("movimientos realizados: " + movimientos);
        mostrarJugada(posicion, "Blue");
        jugadaJavascript();
        verificarGanador();
    } else {
        alert("El juego se terminó, no hay más movimientos")
    }
}
function jugadaJavascript() {
    // se agregó este if para que no acurra indefinidamente el código, limitamos a 9 
    if (movimientos >= 9) {
        return;
    }
    let posicionJavascript = parseInt(Math.random() * 9) + 1;
    if (validarJugada(posicionJavascript)) {
        // aumenta los movimientos
        movimientos++;
        // cuenta los movimientos en la consola
        console.log("movimientos realizados: " + movimientos);
        jugadaMaquina.push(posicionJavascript);
        mostrarJugada(posicionJavascript, "Red");
        console.log("js marcó en " + posicionJavascript);
        // acá se ejecutaba un verificarGanador de más que hacía que apareciera un alert ganador de más
        return;
    }
    jugadaJavascript();
}
function verificarGanador() {
    for (let i = 0; i < jugadasGanadoras.length; i++) {
        /* Exista la combinacion */
        const jugadaGanadora = jugadasGanadoras[i];
        // every devolverá true si algún elemento del arreglo jugadaGanadora está incluido en jugadaPersona
        const resultadoPersona = jugadaGanadora.every(pos => jugadaPersona.includes(pos));
        const resultadoMaquina = jugadaGanadora.every(pos => jugadaMaquina.includes(pos));

        if (resultadoPersona) {
            victoria = true;
            // me aparecía el alert 2 veces, así que le puse un console.log para averiguar por donde fallaba****
            console.log("¡Ganaste!");
            alert("¡Ganaste!");
            /* return BOOL */
            return true;
            break;
        } else if (resultadoMaquina) {
            victoria = true;
            alert("¡La máquina ha ganado!");
            /* return BOOL */
            return true;
            break;
        }
    }
    // se verifica el empate
    verificarEmpate();
    return false;
}
// funcion para pintar los botones dependiendo del jugador
function mostrarJugada(posicion, color) {
    let elemento = document.getElementById("pos" + posicion);
    elemento.style.backgroundColor = color;
}
function validarJugada(posicion) {
    // se agregó este if para que no acurra indefinidamente el código, limitamos a 9 
    if (movimientos >= 9) {
        return false;
    }
    // se crea un array para agregar las jugadas tanto del js como del jugador
    let jugadas = jugadaPersona.concat(jugadaMaquina);
    // quería ver por qué a veces este array "jugadas" se ejecutaba varias veces en la consola,
    // la razón es porque JS está buscando un sitio que no ocupe un lugar en jugadas, como es un numero random
    console.log(jugadas);
    let resultado = true;
    for (let index = 0; index < jugadas.length; index++) {
        const jugadaPosicion = jugadas[index];
        if (jugadaPosicion == posicion) {
            resultado = false;
            break;
        }
    }
    return resultado;
}
function verificarEmpate() {
    if (movimientos >= 9 && !victoria) {
        alert("¡El juego ha terminado en empate!");
        return true;
    }
    return false;
}