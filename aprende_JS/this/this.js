let misCajas = document.getElementsByClassName("caja");
Array.from(misCajas).forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("gris");
    })
});