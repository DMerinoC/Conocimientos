let formulario = document.getElementById("formulario");
let nombre = formulario.nombre;
let sexo = formulario.sexo;
let terminos = formulario.terminos;
function validar(e) {
    if (nombre.value.length > 30) {
        alert("Limite de caracteres permitidos.");
        e.preventDefault();
    } else if (nombre.value === "") {
        alert("Llena el formulario con tu nombre.");
        e.preventDefault();
    }
    if (!(sexo[0].checked) && !(sexo[1].checked)) {
        alert("Por favor, marque una casilla.");
        e.preventDefault();
    }
    if (!(terminos.checked)) {
        alert("Por favor, acepte los términos y condiciones.");
        e.preventDefault();
    }
}
formulario.addEventListener("submit", validar);