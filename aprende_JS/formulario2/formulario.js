let formulario = document.getElementById("formulario"),
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById("error");
function validarNombre(e) {
    if (nombre.value == null || nombre.value == "") {
        console.log("Escriba su nombre.");
        error.style.display = "block";
        error.innerHTML += "<li>Escriba su nombre.</li>";
        e.preventDefault();
    }
}
function validarCorreo(e) {
    if (correo.value == null || correo.value == "") {
        console.log("Escriba su correo.");
        error.style.display = "block";
        error.innerHTML += "<li>Escriba su correo.</li>";
        e.preventDefault();
    }
}
function validarTerminos(e) {
    if (!(terminos.checked)) {
        console.log("Por favor, acepte los términos y condiciones.");
        error.style.display = "block";
        error.innerHTML += "<li>Por favor, acepte los términos y condiciones.</li>";
        e.preventDefault();
    }
}
function validarSexo(e) {
    if (sexo.value == null || sexo.value == "") {
        console.log("Completa el tipo de sexo.");
        error.style.display = "block";
        error.innerHTML += "<li>Completa el tipo de sexo.</li>";
        e.preventDefault();
    }
}
function validarFormulario(e) {
    error.innerHTML = "";
    validarNombre(e);
    validarCorreo(e);
    validarTerminos(e);
    validarSexo(e);
}
formulario.addEventListener("submit", validarFormulario);