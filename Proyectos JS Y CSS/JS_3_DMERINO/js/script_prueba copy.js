let lector = document.getElementById("digita");
let btnNumeros = document.getElementsByClassName("numero");
let signoDecimal = document.getElementById("punto");
let flagPunto = false;
let arregloBotones = Array.from(btnNumeros);
let btnMulti = document.getElementById("multiplicar");
let btnDiv = document.getElementById("dividir");
let btnSum = document.getElementById("sumar");
let btnRes = document.getElementById("restar");
let btnResiduo = document.getElementById("residuo");
let btnClear = document.getElementById("clear");
let respuesta = document.getElementById("rpta");
let primerNumero = null;
let segundoNumero = null;
let operacion = null;
let mostrar = null;
// FUNCIONES
function ingresarNumeros() {
    arregloBotones.forEach(element => {
        element.addEventListener("click", () => {
            if (flagPunto) {
                flagPunto = false;
                lector.value = "";
            }
            let num = element.value;
            lector.value += num;
        })
    });
}
function decimal() {
    signoDecimal.addEventListener("click", () => {
        lector.value += this.value;
        this.disabled = true;
    })
}
function multiplicar() {
    btnMulti.addEventListener("click", () => {
        if (lector.value !== "") {
            primerNumero = parseFloat(lector.value);
            operacion = "multiplicar";
            lector.value = "";
            signoDecimal.disabled = false;

        }
    })
}
function sumar() {
    btnSum.addEventListener("click", () => {
        if (lector.value !== "") {
            primerNumero = parseFloat(lector.value);
            operacion = "sumar";
            lector.value = "";
            signoDecimal.disabled = false;

        }
    })
}
function dividir() {
    btnDiv.addEventListener("click", () => {
        if (lector.value !== "") {
            primerNumero = parseFloat(lector.value);
            operacion = "dividir";
            lector.value = "";
            signoDecimal.disabled = false;

        }
    })
}
function restar() {
    btnRes.addEventListener("click", () => {
        if (lector.value !== "") {
            primerNumero = parseFloat(lector.value);
            operacion = "restar";
            lector.value = "";
            signoDecimal.disabled = false;

        }
    })
}
function residuo() {
    btnResiduo.addEventListener("click", () => {
        if (lector.value !== "") {
            primerNumero = parseFloat(lector.value);
            operacion = "residuo";
            lector.value = "";
            signoDecimal.disabled = false;

        }
    })
}
respuesta.addEventListener("click", () => {
    if (operacion !== null && lector.value !== "" && mostrar == null) {
        segundoNumero = parseFloat(lector.value);
        switch (operacion) {
            case "sumar":
                mostrar = primerNumero + segundoNumero;
                break;
            case "dividir":
                if (segundoNumero !== 0) {
                    mostrar = primerNumero / segundoNumero;
                } else {
                    mostrar = "Error: División por cero";
                }
                break;
            case "multiplicar":
                mostrar = primerNumero * segundoNumero;
                break;
            case "restar":
                mostrar = primerNumero - segundoNumero;
                break;
            case "residuo":
                if (segundoNumero !== 0) {
                    mostrar = primerNumero % segundoNumero;
                } else {
                    mostrar = "Error: División por cero";
                }
                break;
            default:
                mostrar = "Operación no reconocida";
                break;
        }
        lector.value = mostrar;
        primerNumero = mostrar;
    }
    semiReset();
});
function semiReset() {
    primerNumero = null;
    segundoNumero = null;
    mostrar = null;
    operacion = null;
}
function resetear() {
    btnClear.addEventListener("click", () => {
        flagPunto = true;
        primerNumero = null;
        segundoNumero = null;
        operacion = null;
        mostrar = null;
        signoDecimal.disabled = false;
    })
}
ingresarNumeros();
decimal();
multiplicar();
sumar();
dividir();
restar();
residuo();
resetear();